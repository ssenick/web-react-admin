import React, {useMemo} from 'react';
import {Box, Typography, useMediaQuery, useTheme} from "@mui/material";
import Header from "../../../components/Header";
import {tokens} from "../../../theme";
import {DataGrid} from "@mui/x-data-grid";
import {mockDataInvoices} from "../../../data/mockData";


const Invoices = () => {
   const theme = useTheme()
   const colors = tokens(theme.palette.mode)
   const isNonMobil = useMediaQuery('(min-width:600px)');
   const columns = useMemo(()=>[
      {field: 'id', headerName: 'ID'},
      {field: 'name', headerName: 'Name', flex: 1,minWidth: 140, cellClassName: 'name-column--cell'},
      {field: 'email', headerName: 'Email', flex: 1,minWidth: 200,},
      {field: 'phone', headerName: 'Phone', flex: 1,minWidth: 100,},
      {field: 'cost', headerName: 'Cost', flex: 1,minWidth: 70, renderCell: (params)=>(
            <Typography color={colors.greenAccent[500]}>
               ${params.row.cost}
            </Typography>
         )},
      {field: 'date', headerName: 'Date', flex: 1, minWidth: 90,},
   ],[])
   return (
      <Box m={isNonMobil ? '20px' : '10px'} display={"flex"} flexDirection={"column"}>
         <Header title='INVOICES' subtitle='List of Invoice Balances'/>
         <Box
            height='75vh '
            sx={{
               '& .MuiDataGrid-root': {
                  border: 'none !important',

               },
               '& .MuiDataGrid-columnHeaders': {
                  border: 'none !important',
                  backgroundColor: colors.blueAccent[700]
               },
               '& .MuiDataGrid-cell': {
                  border: 'none !important',
               },
               '& .MuiDataGrid-virtualScroller': {
                  backgroundColor: colors.primary[400]
               },
               '& .MuiDataGrid-footerContainer': {
                  border: 'none !important',
                  backgroundColor: colors.blueAccent[700],
               },
               '& .MuiDataGrid-checkbox-root': {
                  color: `${colors.greenAccent[200]} !important`
               },
               '& .MuiCheckbox-root.Mui-checked': {
                  color: `${colors.grey[100]} !important`
               },
               [`.MuiDataGrid-virtualScroller::-webkit-scrollbar `]: {
                  width: "5px ",
                  height: '5px'
               },
               [`.MuiDataGrid-virtualScroller::-webkit-scrollbar-track `]: {
                  background:`${colors.blueAccent[800]}`,
               },
               [`.MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb `]: {
                  background:`${colors.blueAccent[600]}`,
               },

            }}
         >
            <DataGrid checkboxSelection columns={columns} rows={mockDataInvoices} />
         </Box>
      </Box>
   );
};

export default Invoices;