import React, {useEffect, useMemo, useState} from 'react';
import {Alert, Box, Typography, useMediaQuery, useTheme} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import PostService from "../../../API/postService";
import {useFetching} from "../../../hooks/useFetching";
import {tokens} from "../../../theme";
import {Header,Loading} from "../../../components";


const Invoices = () => {
   const [mockDataInvoices,setMockDataInvoices] = useState([]);
   const theme = useTheme()
   const colors = tokens(theme.palette.mode)
   const isNotMobile = useMediaQuery('(min-width:600px)');
   const [fetchInvoices, isLoading, error] = useFetching( async ()=>{
      const {data} = await PostService.getInvoices();
      setMockDataInvoices(data)
   })
   useEffect(()=>{
      fetchInvoices()
   },[])
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
      <Box m={isNotMobile ? '20px' : '10px'} display={"flex"} flexDirection={"column"}>
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
                  background:`transparent`,
               },
               [`.MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb `]: {
                  background:`${colors.blueAccent[800]}`,
               },

            }}
         >
            {mockDataInvoices.length > 0 && <DataGrid checkboxSelection columns={columns} rows={mockDataInvoices} />}
            {isLoading && <Loading/>}
            {error &&  <Alert severity="error">{error}</Alert>}
         </Box>
      </Box>
   );
};

export default Invoices;