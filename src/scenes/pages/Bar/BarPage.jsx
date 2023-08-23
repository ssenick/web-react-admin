import React, {useEffect, useState} from 'react';
import Header from "../../../components/Header";
import {Alert, Box, useMediaQuery} from "@mui/material";
import BarChart from "../../../components/BarChart";
import {useFetching} from "../../../hooks/useFetching";
import PostService from "../../../API/postService";
import Loading from "../../../components/Loading";
const BarPage = () => {
   const [mockBarData,setMockBarData] = useState(null);
   const isNonMobil = useMediaQuery('(min-width:600px)');
   const [fetchBar, isLoading, error] = useFetching( async ()=>{
      const {data} = await PostService.getBar();
      setMockBarData(data)
   })
   useEffect(()=>{
      fetchBar()
   },[])
   return (
      <Box m={isNonMobil ? '20px' : '10px'} display={"flex"} flexDirection={"column"}>
         <Header title='BAR CHART' subtitle='Simple Bar Chart'/>
         <Box height='75vh'>
            {mockBarData && <BarChart data={mockBarData} />}
            {isLoading && <Loading/>}
            {error &&  <Alert severity="error">{error}</Alert>}
         </Box>
      </Box>
   );
};

export default BarPage;