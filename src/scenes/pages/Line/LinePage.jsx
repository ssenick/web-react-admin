import React, {useEffect, useState} from 'react';
import Header from "../../../components/Header";
import {Alert, Box, useMediaQuery} from "@mui/material";
import {useFetching} from "../../../hooks/useFetching";
import PostService from "../../../API/postService";
import Loading from "../../../components/Loading";
import LineChart from "../../../components/LineChart";


const LinePage = () => {
   const [mockLineData,setMockLineData] = useState(null);
   const isNonMobil = useMediaQuery('(min-width:600px)');
   const [fetchLine, isLoading, error] = useFetching( async ()=>{
      const {data} = await PostService.getLine();
      setMockLineData(data)
   })

   useEffect(()=>{
      fetchLine()
   },[])

   return (
      <Box m={isNonMobil ? '20px' : '10px'} display={"flex"} flexDirection={"column"}>
         <Header title='BAR CHART' subtitle='Simple Bar Chart'/>
         <Box height='75vh'>
            {mockLineData && <LineChart data={mockLineData} />}
            {isLoading && <Loading/>}
            {error &&  <Alert severity="error">{error}</Alert>}
         </Box>
      </Box>
   );
};

export default LinePage;