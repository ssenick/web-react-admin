import React, {useEffect, useState} from 'react';
import Header from "../../../components/Header";
import {Alert, Box, useMediaQuery} from "@mui/material";
import {useFetching} from "../../../hooks/useFetching";
import PostService from "../../../API/postService";
import Loading from "../../../components/Loading";
import GeoChart from "../../../components/GeoChart";


const GeoPage = () => {
   const [mockGeoData,setMockGeoData] = useState(null);
   const isNonMobil = useMediaQuery('(min-width:600px)');
   const [fetchGeo, isLoading, error] = useFetching( async ()=>{
      const {data} = await PostService.getGeo();
      setMockGeoData(data)
   })
   useEffect(()=>{
      fetchGeo()
   },[])
   return (
      <Box m={isNonMobil ? '20px' : '10px'} display={"flex"} flexDirection={"column"}>
         <Header title='GEO CHART' subtitle='Simple Geo Chart'/>
         <Box height='75vh'>
            {mockGeoData && <GeoChart data={mockGeoData} />}
            {isLoading && <Loading/>}
            {error &&  <Alert severity="error">{error}</Alert>}
         </Box>
      </Box>
   );
};

export default GeoPage;