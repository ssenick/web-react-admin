import React, {useCallback} from 'react';
import { Box, Button, useMediaQuery, useTheme} from "@mui/material";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Header from "../../../components/Header";
import {tokens} from "../../../theme";
import StatBoxes from "../../../components/StatBoxes";
import Transactions from "../../../components/Transactions";
import Revenue from "../../../components/Revenue";
import Campain from "../../../components/Campain";
import Quantily from "../../../components/Quantily";
import Traffic from "../../../components/Traffic";

const DashboardPage = () => {
   const theme = useTheme()
   const colors = tokens(theme.palette.mode)
   const isNonPc = useMediaQuery('(min-width:1250px)');
   const isNonTablet = useMediaQuery('(min-width:950px)');
   const isNonMobile = useMediaQuery('(min-width:600px)');
   const screenTabletCheck = useCallback(() => {
      if(isNonPc){
         return 'span 8'
      }
      if(!isNonPc && isNonTablet){
         return 'span 12'
      }
      if(!isNonTablet){
         return 'span 6'
      }
   },[isNonPc,isNonTablet,isNonMobile])

   return (
      <Box m='20px'>
         <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}
              mb={isNonMobile ? '40px' : '20px'}>
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
            gridTemplateColumns={isNonTablet ? 'repeat(12,1fr)' : 'repeat(6,1fr)' }
            gridAutoRows='140px'
            gap='20px'
         >
            {/* ROW 1 */}
            <StatBoxes gridColumn={isNonPc ? 'span 3' : 'span 6'}/>
            {/* ROW 2 */}
            <Revenue gridColumn={screenTabletCheck} />
            <Transactions gridColumn={isNonPc ? 'span 4' : 'span 6'}/>

            {/* ROW 3 */}
            <Campain gridColumn={isNonPc ? 'span 4' : 'span 6'}/>
            <Quantily gridColumn={isNonPc ? 'span 4' : 'span 6'}/>
            <Traffic gridColumn={isNonPc ? 'span 4' : 'span 6'}/>
         </Box>
      </Box>
   );
};

export default DashboardPage;