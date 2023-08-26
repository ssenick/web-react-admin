import React from 'react';
import {Box, Typography, useTheme} from "@mui/material";
import {tokens} from "../theme";
import {mockTransactions} from "../data/mockData";


const Transactions = ({gridColumn = 'span 4', gridRow='span 2'}) => {
   const theme = useTheme()
   const colors = tokens(theme.palette.mode)
   return (
      <Box gridColumn={gridColumn} gridRow={gridRow} borderRadius='5px' bgcolor={colors.primary[400]} overflow={"auto"}>
         <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}
              borderBottom={`4px solid ${colors.primary[500]}`} color={colors.grey[100]} p='15px'>
            <Typography color={colors.grey[100]} variant='h5' fontWeight='600'>
               Recent Transactions
            </Typography>
         </Box>
         {mockTransactions.map((item,index) =>
            <Box
               key={index}
               display={"flex"} justifyContent={"space-between"} alignItems={"center"}
               borderBottom={`4px solid ${colors.primary[500]}`} p='15px'>
               <Box>
                  <Typography color={colors.greenAccent[500]} variant='h5' fontWeight='600'>
                     {item.user}
                  </Typography>
                  <Typography color={colors.grey[100]} >
                     {item.txId}
                  </Typography>
               </Box>
               <Box color={colors.grey[100]}>
                  {item.date}
               </Box>
               <Box bgcolor={colors.greenAccent[500] } p="5px" borderRadius='4px'>
                  {item.value}
               </Box>
            </Box>
         )}
      </Box>
   );
};

export default Transactions;