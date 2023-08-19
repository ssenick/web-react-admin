import React from 'react';
import {tokens} from "../theme";
import {Box, Typography, useMediaQuery, useTheme} from "@mui/material";

const Header = ({title, subtitle}) => {
   const theme = useTheme()
   const colors = tokens(theme.palette.mode)
   const matches = useMediaQuery('(min-width:600px)');
   return (
      <Box mb={matches ? '40px' : '20px'}>
         <Typography variant={matches ? 'h2' : 'h3'} color={colors.grey[100]} fontWeight='bold' sx={{mb: '5px'}}>{title}</Typography>
         <Typography variant='h6' fontSize={!matches ? '12px' : undefined} color={colors.greenAccent[500]} >{subtitle}</Typography>
      </Box>
   );
};

export default Header;