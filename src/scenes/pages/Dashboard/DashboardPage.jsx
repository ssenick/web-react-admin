import React, {useEffect, useState} from 'react';
import {Alert, Box, Button, IconButton, Typography, useMediaQuery, useTheme} from "@mui/material";
import Header from "../../../components/Header";
import {tokens} from "../../../theme";
import LineChart from "../../../components/LineChart";
import {useFetching} from "../../../hooks/useFetching";
import PostService from "../../../API/postService";
import StatBoxes from "../../../components/StatBoxes";
import Transactions from "../../../components/Transactions";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import Loading from "../../../components/Loading";

const DashboardPage = () => {
   const [mockLineData,setMockLineData] = useState(null);
   const theme = useTheme()
   const colors = tokens(theme.palette.mode)
   const isNonMobile = useMediaQuery('(min-width:600px)');

   const [fetchLine, isLoadingLine, errorLine] = useFetching( async ()=>{
      const {data} = await PostService.getLine();
      setMockLineData(data)
   })

   useEffect(()=>{
      fetchLine()
   },[])
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
            gridTemplateColumns='repeat(12,1fr)'
            gridAutoRows='140px'
            gap='20px'
         >
            {/* STAT_BOXES */}
               <StatBoxes gridColumn='span 3'/>
            {/* ROW 2 */}
            <Box
               gridColumn='span 8'
               gridRow='span 2'
               borderRadius='5px'
               backgroundColor={colors.primary[400]}
               p='20px 10px'
            >
               <Box
                  p='0 10px 20px 30px'
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
               >
                  <Box>
                     <Typography variant='h5' fontWeight='600' color={colors.grey[100]}>
                        Revenue Generated
                     </Typography>
                     <Typography variant='h3' fontWeight='500' color={colors.greenAccent[500]}>
                        $59,342,32
                     </Typography>
                  </Box>
                  <Box>
                     <IconButton>
                        <DownloadOutlinedIcon
                           sx={{fontSize: "26px", color: colors.greenAccent[500]}}/>
                     </IconButton>
                  </Box>
               </Box>
               <Box height='200px' >
                  {mockLineData && <LineChart data={mockLineData} isDashboard={true}/>}
                  {isLoadingLine && <Loading/>}
                  {errorLine &&  <Alert severity="error">{errorLine}</Alert>}
               </Box>
            </Box>

            {/* TRANSACTIONS */}
               <Transactions/>
         </Box>
      </Box>
   );
};

export default DashboardPage;