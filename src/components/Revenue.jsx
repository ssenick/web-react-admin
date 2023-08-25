import React, {useEffect, useState} from 'react';
import {Alert, Box, IconButton, Typography, useTheme} from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LineChart from "./LineChart";
import Loading from "./Loading";
import {tokens} from "../theme";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/postService";

const Revenue = ({gridColumn = 'span 8', gridRow='span 2'}) => {
   const theme = useTheme()
   const colors = tokens(theme.palette.mode)
   const [mockLineData,setMockLineData] = useState(null);
   const [fetchLine, isLoadingLine, errorLine] = useFetching( async ()=>{
      const {data} = await PostService.getLine();
      setMockLineData(data)
   })
   useEffect(()=>{
      fetchLine()
   },[])

   return (
      <Box
         gridColumn={gridColumn}
         gridRow={gridRow}
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
               <Typography variant='h3' fontWeight='bold' color={colors.greenAccent[500]}>
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
   );
};

export default Revenue;