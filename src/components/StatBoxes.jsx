import React from 'react';
import {Box, useTheme} from "@mui/material";
import {tokens} from "../theme";
import StatBox from "./StatBox";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";


const StatBoxes = ({gridColumn = 'span 3'}) => {
   const theme = useTheme()
   const colors = tokens(theme.palette.mode)
   return (
      <>
         <Box gridColumn={gridColumn} borderRadius='5px' backgroundColor={colors.primary[400]} display={"flex"}
              alignItems={"center"} justifyContent={"center"}>
            <StatBox
               title='12,233'
               subtitle='Emails Sent'
               progress='0.75'
               desc='+14%'
               icon={<EmailIcon sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>}/>
         </Box>
         <Box gridColumn={gridColumn} borderRadius='5px' backgroundColor={colors.primary[400]} display={"flex"}
              alignItems={"center"} justifyContent={"center"}>
            <StatBox
               title='431,225'
               subtitle='Sales Obtained'
               progress='0.5'
               desc='+21%'
               icon={<PointOfSaleIcon sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>}/>
         </Box>
         <Box gridColumn={gridColumn} borderRadius='5px' backgroundColor={colors.primary[400]} display={"flex"}
              alignItems={"center"} justifyContent={"center"}>
            <StatBox
               title='32,441'
               subtitle='New Clients'
               progress='0.3'
               desc='+5%'
               icon={<PersonAddIcon sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>}/>
         </Box>
         <Box gridColumn={gridColumn} borderRadius='5px' backgroundColor={colors.primary[400]} display={"flex"}
              alignItems={"center"} justifyContent={"center"}>
            <StatBox
               title='1,325,134'
               subtitle='Traffic Inbound'
               progress='0.80'
               desc='+43%'
               icon={<TrafficIcon sx={{color: colors.greenAccent[600], fontSize: '26px'}}/>}/>
         </Box>
      </>
   );
};

export default StatBoxes;