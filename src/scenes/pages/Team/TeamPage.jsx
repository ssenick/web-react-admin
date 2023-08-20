import React, {useEffect, useMemo} from 'react';
import {Box, Typography, useMediaQuery, useTheme} from "@mui/material";
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
   const matches = useMediaQuery('(min-width:600px)');
   const columns = useMemo(()=>[
      {field: 'id', headerName: 'ID'},
      {field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell',minWidth: 145},
      {field: 'age', headerName: 'Age', type: "number", headerAlign: 'left', align: 'left',minWidth: 80},
      {field: 'phone', headerName: 'Phone Number', flex: 1,minWidth: 105},
      {field: 'email', headerName: 'Email', flex: 1,minWidth: 175},
      {
         field: 'access', headerName: 'Access Level', flex: 1,minWidth: 165, renderCell: ({row: {access}}) => {
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
   ],[])

   return (
      <Box m={matches ? '20px' : '10px'} display={"flex"} flexDirection={"column"}>
         <Header title='TEAM' subtitle='Managing the Team Members'/>
         <Box
            // flex= ' 1 1 auto'
            height='75vh'
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
            <DataGrid columns={columns} rows={mockDataTeam}/>
         </Box>
      </Box>
   );
};

export default TeamPage;