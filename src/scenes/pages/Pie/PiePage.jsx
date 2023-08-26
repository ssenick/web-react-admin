import React, {useEffect, useState} from 'react';
import {Alert, Box, useMediaQuery} from "@mui/material";
import {useFetching} from "../../../hooks/useFetching";
import PostService from "../../../API/postService";
import {Loading,Header,PieChart} from "../../../components";


const PiePage = () => {
   const [mockPieData,setMockPieData] = useState(null);
   const isNotMobile = useMediaQuery('(min-width:600px)');
   const [fetchPie, isLoading, error] = useFetching( async ()=>{
      const {data} = await PostService.getPie();
      setMockPieData(data)
   })
   useEffect(()=>{
      fetchPie()
   },[])
   return (
      <Box m={isNotMobile ? '20px' : '10px'} display={"flex"} flexDirection={"column"}>
         <Header title='PIE CHART' subtitle='Simple Pie Chart'/>
         <Box height='75vh'>
            {mockPieData && <PieChart data={mockPieData} />}
            {isLoading && <Loading/>}
            {error &&  <Alert severity="error">{error}</Alert>}
         </Box>
      </Box>
   );
};

export default PiePage;