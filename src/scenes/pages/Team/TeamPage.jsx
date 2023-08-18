import React from 'react';
import {Box, Typography, useTheme} from "@mui/material";
import Header from "../../../components/Header";
import {tokens} from "../../../theme";
import {DataGrid} from "@mui/x-data-grid";
import {mockDataTeam} from "../../../data/mockData";
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';

const TeamPage = () => {
   const theme = useTheme()
   const colors = tokens(theme.palette.mode)
   const columns = [
      {field: 'id', headerName: 'ID'},
      {field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell'},
      {field: 'age', headerName: 'Age', type: "number", headerAlign: 'left', align: 'left'},
      {field: 'phone', headerName: 'Phone Number', flex: 1},
      {field: 'email', headerName: 'Email', flex: 1},
      {
         field: 'access', headerName: 'Access Level', flex: 1, renderCell: ({row: {access}}) => {
            return (
               <Box
                  width='70%'
                  m='0 auto'
                  p='5px'
                  display={"flex"}
                  justifyContent={"center"}
                  borderRadius='4px'
                  bgcolor={access === 'admin' ? colors.greenAccent[600] : colors.greenAccent[700]}
               >
                  {access === 'admin' && < AdminPanelSettingsOutlinedIcon/>}
                  {access === 'manager' && < SecurityOutlinedIcon/>}
                  {access === 'user' && < LockOpenOutlinedIcon/>}
                  <Typography color={colors.grey[100]} ml='5px'>{access}</Typography>
               </Box>
            )
         }
      },
   ]
   return (
      <Box m='20px'>
         <Header title='TEAM' subtitle='Managing the Team Members'/>
         <Box
            height='75vh'
            sx={{
               '& .uiDataGrid-root': {
                  border: 'none !important'
               },
               '& .MuiDataGrid-columnHeaders': {
                  border: 'none !important',
                  backgroundColor: colors.blueAccent[700]
               },
               '& .MuiDataGrid-cell': {
                  border: 'none !important',

               },
               '& .MuiDataGrid-footerContainer': {
                  border: 'none !important',
                  backgroundColor: colors.blueAccent[700]
               },
            }}
         >
            <DataGrid columns={columns} rows={mockDataTeam}/>
         </Box>
      </Box>
   );
};

export default TeamPage;