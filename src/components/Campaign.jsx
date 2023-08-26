import {Box, Typography, useTheme} from "@mui/material";
import {tokens} from "../theme";
import {ProgressCircle} from "./index";

const Campaign = ({gridColumn = 'span 4', gridRow = 'span 2'}) => {
   const theme = useTheme()
   const colors = tokens(theme.palette.mode)

   return (
      <Box gridColumn={gridColumn} gridRow={gridRow} borderRadius='5px' backgroundColor={colors.primary[400]}
           p='30px'>
         <Typography variant='h5' fontWeight='600' mb='25px'>
            Campaign
         </Typography>
         <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <ProgressCircle size='125'/>
            <Typography variant='h5' color={colors.greenAccent[500]} mt='15px'>
               $48,352 revenue generated
            </Typography>
            <Typography mb='25px'>
               Includes extra misc expenditures and costs
            </Typography>
         </Box>
      </Box>
   );
};

export default Campaign;