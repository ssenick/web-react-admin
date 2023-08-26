import React, {useEffect, useState} from 'react';
import {Alert, Box, Typography, useTheme} from "@mui/material";
import {tokens} from "../theme";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/postService";
import {Loading,BarChart} from "./index";

const Quantity = ({gridColumn = 'span 4', gridRow = 'span 2'}) => {
   const theme = useTheme()
   const colors = tokens(theme.palette.mode)
   const [mockBarData, setMockBarData] = useState(null);
   const [fetchBar, isLoadingBar, errorBar] = useFetching(async () => {
      const {data} = await PostService.getBar();
      setMockBarData(data)
   })
   useEffect(() => {
      fetchBar()
   }, [])

   return (
      <Box gridColumn={gridColumn} gridRow={gridRow} borderRadius='5px' overflow={"hidden"} backgroundColor={colors.primary[400]}
      >
         <Typography variant='h5' fontWeight='600' p='30px 30px 0 30px'>
            Sales Quantity
         </Typography>
         <Box height='230px' mr='-85px'
         >
            {mockBarData && <BarChart data={mockBarData} isDashboard={true}/>}
            {isLoadingBar && <Loading/>}
            {errorBar && <Alert severity="error">{errorBar}</Alert>}
         </Box>
      </Box>
   );
};

export default Quantity;