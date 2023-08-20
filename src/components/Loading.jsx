import React from 'react';
import {Box, CircularProgress, useTheme} from "@mui/material";
import {tokens} from "../theme";

const Loading = () => {
   const theme = useTheme()
   const colors = tokens(theme.palette.mode)
   return (
      <Box sx={{
         position:'absolute',
         top: '50vh',
         left: '50%',
         transform: 'translate(-50%,-50%)',
         zIndex:'20',
         '& .MuiCircularProgress-root' : {
            width:'80px !important',
            height:'80px !important',
            color: `${colors.blueAccent[500]}`
         }
      }}>
         <CircularProgress color='success' />
      </Box>
   );
};

export default Loading;