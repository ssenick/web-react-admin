import React, {useCallback} from 'react';
import { Box, Button, useMediaQuery, useTheme} from "@mui/material";
import {tokens} from "../../../theme";
import {Header,StatBoxes,Transactions,Revenue,Campaign,Quantity,Traffic} from "../../../components";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const DashboardPage = () => {
   const theme = useTheme()
   const colors = tokens(theme.palette.mode)
   const isNotPc = useMediaQuery('(min-width:1250px)');
   const isNotTablet = useMediaQuery('(min-width:950px)');
   const isNotMobile = useMediaQuery('(min-width:600px)');

   const screenTabletCheck = useCallback(() => {
      if(isNotPc){
         return 'span 8'
      }
      if(!isNotPc && isNotTablet){
         return 'span 12'
      }
      if(!isNotTablet){
         return 'span 6'
      }
   },[isNotPc,isNotTablet])

   return (
      <Box m='20px'>
         <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}
              mb={isNotMobile ? '40px' : '20px'}>
            <Header title="DASHBOARD" subtitle="Welcome to your dashboard" dashboard={true}/>
            <Box>
               <Button sx={{
                  backgroundColor: colors.blueAccent[700],
                  color: colors.grey[100],
                  fontSize: '14px',
                  fontWeight: 'bold',
                  padding: '10px 20px',
                  ":hover": {
                     backgroundColor: colors.blueAccent[800]
                  }
               }}>
                  <FileDownloadOutlinedIcon sx={{marginRight: '10px'}}/>
                  Download Reports
               </Button>
            </Box>
         </Box>
         <Box
            display={"grid"}
            gridTemplateColumns={isNotTablet ? 'repeat(12,1fr)' : 'repeat(6,1fr)' }
            gridAutoRows='140px'
            gap='20px'
         >
            {/* ROW 1 */}
            <StatBoxes gridColumn={isNotPc ? 'span 3' : 'span 6'}/>
            {/* ROW 2 */}
            <Revenue gridColumn={screenTabletCheck} />
            <Transactions gridColumn={isNotPc ? 'span 4' : 'span 6'}/>

            {/* ROW 3 */}
            <Campaign gridColumn={isNotPc ? 'span 4' : 'span 6'}/>
            <Quantity gridColumn={isNotPc ? 'span 4' : 'span 6'}/>
            <Traffic gridColumn={isNotPc ? 'span 4' : 'span 6'}/>
         </Box>
      </Box>
   );
};

export default DashboardPage;