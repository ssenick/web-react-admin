import React, {useEffect, useState} from 'react';
import Header from "../../../components/Header";
import {Alert, Box, useMediaQuery, useTheme} from "@mui/material";
import {useFetching} from "../../../hooks/useFetching";
import PostService from "../../../API/postService";
import Loading from "../../../components/Loading";
import GeoChart from "../../../components/GeoChart";
import {tokens} from "../../../theme";


const GeoPage = () => {
   const theme = useTheme()
   const colors = tokens(theme.palette.mode)
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
         <Box height='75vh' border={`1px solid ${colors.grey[100]}`} borderRadius='5px'>
            {mockGeoData && <GeoChart data={mockGeoData} />}
            {isLoading && <Loading/>}
            {error &&  <Alert severity="error">{error}</Alert>}
         </Box>
      </Box>
   );
};

export default GeoPage;