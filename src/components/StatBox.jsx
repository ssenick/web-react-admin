import React from 'react';
import {Box, Typography, useMediaQuery, useTheme} from "@mui/material";
import {tokens} from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({title, subtitle, icon, progress, desc}) => {
   const theme = useTheme()
   const colors = tokens(theme.palette.mode)

   return (
      <Box width='100%' m='0 30px'>
         <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} gap='15px' >
            <Box display={"grid"} gap='7px'>
               {icon}
               <Typography variant='h4' fontWeight={"bold"} color={colors.grey[100]}>
                  {title}
               </Typography>
               <Typography variant='h5' color={colors.greenAccent[500]}>
                  {subtitle}
               </Typography>
            </Box>
            <Box display={"grid"} gap='10px'>
               <Box>
                  <ProgressCircle progress={progress}/>
               </Box>
               <Typography variant='h5' fontStyle={"italic"} color={colors.greenAccent[600]}>
                  {desc}
               </Typography>
            </Box>
         </Box>
      </Box>
   );
};

export default StatBox;