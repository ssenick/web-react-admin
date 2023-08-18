import React from 'react';
import {tokens} from "../theme";
import {Box, Typography, useTheme} from "@mui/material";

const Header = ({title, subtitle}) => {
   const theme = useTheme()
   const colors = tokens(theme.palette.mode)
   return (
      <Box mb='40px'>
         <Typography variant='h2' color={colors.grey[100]} fontWeight='bold' sx={{mb: '5px'}}>{title}</Typography>
         <Typography variant='h6' color={colors.greenAccent[500]} >{subtitle}</Typography>
      </Box>
   );
};

export default Header;