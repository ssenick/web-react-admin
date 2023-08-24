import React, {useEffect, useMemo, useState} from 'react';
import {Alert, Box, useMediaQuery, useTheme} from "@mui/material";
import Header from "../../../components/Header";
import {tokens} from "../../../theme";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import Loading from "../../../components/Loading";
import {useFetching} from "../../../hooks/useFetching";
import PostService from "../../../API/postService";


const ContactsPage = () => {
   const [mockDataContacts,setMockDataContacts] = useState([]);
   const theme = useTheme()
   const colors = tokens(theme.palette.mode)
   const isNonMobil = useMediaQuery('(min-width:600px)');
   const isNonMobil_800 = useMediaQuery('(min-width:800px)');
   const [fetchContacts, isLoading, error] = useFetching( async ()=>{
      const {data} = await PostService.getContacts();
      setMockDataContacts(data)
   })

   useEffect(()=>{
      fetchContacts()

   },[])
   const columns = useMemo(() => [
      {field: 'id', headerName: 'ID',flex: 0.5},
      {field: 'registrarId', headerName: 'Registrar Id'},
      {field: 'name', headerName: 'Name', flex: 0.7, cellClassName: 'name-column--cell',minWidth: 140},
      {field: 'age', headerName: 'Age', type: "number", headerAlign: 'left', align: 'left',flex: 0.3,minWidth: 55},
      {field: 'phone', headerName: 'Phone Number', flex: 1,minWidth: 105},
      {field: 'email', headerName: 'Email', flex: 1,minWidth: 185},
      {field: 'address', headerName: 'Address', flex: 1,minWidth: 190},
      {field: 'city', headerName: 'City', flex: 0.6,minWidth: 85},
      {field: 'zipCode', headerName: 'Zip Code', flex: 0.5,minWidth: 65}
   ], [])
   return (
      <Box m={isNonMobil ? '20px' : '10px'} display={"flex"} flexDirection={"column"}>
         <Header title='CONTACTS' subtitle='List of Contacts for Future Reference'/>
         <Box
            height='75vh'
            // flex=' 1 1 auto'
            sx={{
               '& .MuiDataGrid-root': {
                  border: 'none !important'
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
               '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
                  color: `${colors.grey[100]} !important`
               },
               '& .MuiDataGrid-toolbarContainer': {
                  display:`${!isNonMobil_800 ? 'none' : undefined}`
               },
               [`.MuiDataGrid-virtualScroller::-webkit-scrollbar `]: {
                  width: "5px ",
                  height: '5px'
               },
               [`.MuiDataGrid-virtualScroller::-webkit-scrollbar-track `]: {
                  background: `${colors.blueAccent[800]}`,
               },
               [`.MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb `]: {
                  background: `${colors.blueAccent[600]}`,
               },

            }}
         >
            {mockDataContacts.length > 0 && <DataGrid columns={columns} rows={mockDataContacts} slots={{toolbar: GridToolbar}}/>}
            {isLoading && <Loading/>}
            {error &&  <Alert severity="error">{error}</Alert>}
         </Box>
      </Box>
   );
};

export default ContactsPage;