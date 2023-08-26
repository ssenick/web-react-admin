import React, {useEffect, useState} from 'react';
import {Alert, Box, useMediaQuery} from "@mui/material";
import {useFetching} from "../../../hooks/useFetching";
import PostService from "../../../API/postService";
import {Loading,LineChart,Header} from "../../../components";


const LinePage = () => {
   const [mockLineData,setMockLineData] = useState(null);
   const isNotMobile = useMediaQuery('(min-width:600px)');
   const [fetchLine, isLoading, error] = useFetching( async ()=>{
      const {data} = await PostService.getLine();
      setMockLineData(data)
   })

   useEffect(()=>{
      fetchLine()
   },[])

   return (
      <Box m={isNotMobile ? '20px' : '10px'} display={"flex"} flexDirection={"column"}>
         <Header title='LIEN CHART' subtitle='Simple Line Chart'/>
         <Box height='75vh'>
            {mockLineData && <LineChart data={mockLineData} />}
            {isLoading && <Loading/>}
            {error &&  <Alert severity="error">{error}</Alert>}
         </Box>
      </Box>
   );
};

export default LinePage;