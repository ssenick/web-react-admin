import React, {memo} from 'react';
import {Box, Typography, useMediaQuery, useTheme} from "@mui/material";
import {tokens} from "../theme";

const Header = memo(({title, subtitle, dashboard = false}) => {
   const isNotMobile = useMediaQuery('(min-width:600px)');
   const theme = useTheme()
   const colors = tokens(theme.palette.mode)
   return (
      <Box mb={isNotMobile && !dashboard ? '40px' : '20px'}>
         <Typography variant={isNotMobile ? 'h2' : 'h3'} color={colors.grey[100]} fontWeight='bold'
                     sx={{mb: '5px'}}>{title}</Typography>
         <Typography variant='h6' fontSize={!isNotMobile ? '12px' : undefined}
                     color={colors.greenAccent[500]}>{subtitle}</Typography>
      </Box>
   );
})

export default Header;