import React, {useEffect, useState} from 'react';
import {Alert, Box, Typography, useTheme} from "@mui/material";
import {tokens} from "../theme";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/postService";
import {Loading,GeoChart} from "./index";

const Traffic = ({gridColumn = 'span 8', gridRow='span 2'}) => {
   const theme = useTheme()
   const colors = tokens(theme.palette.mode)
   const [mockGeoData, setMockGeoData] = useState(null);
   const [fetchGeo, isLoadingGeo, errorGeo] = useFetching(async () => {
      const {data} = await PostService.getGeo();
      setMockGeoData(data)
   })
   useEffect(()=>{
      fetchGeo()
   },[])

   return (
      <Box gridColumn={gridColumn} gridRow={gridRow} borderRadius='5px' backgroundColor={colors.primary[400]} p='30px'
      >
         <Typography variant='h5' fontWeight='600' mb='15px'>
            Geography Based Traffic
         </Typography>
         <Box height='200px'>
            {mockGeoData && <GeoChart data={mockGeoData} isDashboard={true}/>}
            {isLoadingGeo && <Loading/>}
            {errorGeo && <Alert severity="error">{errorGeo}</Alert>}
         </Box>
      </Box>
   );
};

export default Traffic;