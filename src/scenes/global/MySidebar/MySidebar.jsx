import React from 'react';
import {useState} from "react";
import {Sidebar, Menu, MenuItem} from 'react-pro-sidebar';
import {Box, IconButton, Typography, useTheme} from "@mui/material";
import {tokens} from "../../../theme";
import {userImage} from "../../../assets";
import ItemMenu from "./ItemMenu";
import Icon from '@mui/material/Icon';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';

const MySidebar = () => {
   const theme = useTheme()
   const colors = tokens(theme.palette.mode)
   const [isCollapsed, setIsCollapsed] = useState(false);
   const [selected, setSelected] = useState('Dashboard');
   console.log(isCollapsed)
   return (
      <Sidebar
         collapsed={isCollapsed}
         rootStyles={{
            [`&.ps-sidebar-root`]: {
               border: 'none'
            },
            [`.MuiBox-root`]: {
               // paddingLeft:'0px'
            },
            [`.ps-sidebar-container`]: {
               backgroundColor: `${colors.primary[400]}`,
            },
            [`.ps-sidebar-container::-webkit-scrollbar `]: {
               width: "5px ",
            },
            [`.ps-sidebar-container::-webkit-scrollbar-track `]: {
               background:`${colors.blueAccent[800]}`,
            },
            [`.ps-sidebar-container::-webkit-scrollbar-thumb `]: {
               background:`${colors.blueAccent[600]}`,
            },
            [`.ps-menu-button`]: {
               // padding: '0px 10px',
               padding: "5px 20px 5px 20px !important",
               color: `${colors.grey[100]} !important`,
            },
            [`.ps-menu-button:hover`]: {
               backgroundColor: "transparent !important",
               color: '#868dfb !important'
            },
            [`.ps-menu-button .ps-active`]: {
               color: '#6870fa'
            },
         }}
      >
         <Menu>
            <MenuItem
               onClick={() => setIsCollapsed(!isCollapsed)}
               icon={isCollapsed ? <MenuOutlinedIcon/> : undefined}
               style={{
                  margin: '10px 0 20px 0',
                  color: colors.grey[100]
               }}>
               {!isCollapsed &&
                  <Box display={'flex'} justifyContent={"space-between"} alignItems={"center"} ml='15px'>
                     <Typography variant='h4' color={colors.grey[100]}>ADMINS</Typography>
                     <IconButton >
                        <MenuOpenOutlinedIcon/>
                     </IconButton>
                  </Box>}
            </MenuItem>
         </Menu>
         {!isCollapsed &&
            <Box mb='25px'>
               <Box
                  sx={{
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center'
                  }}>
                  <img src={userImage}
                       alt="User"
                       style={{
                          borderRadius: '50%',
                          width: '80px',
                          height: '80px',
                          cursor: 'pointer',
                          objectFit: 'cover'
                       }}/>
               </Box>
               <Box sx={{
                  textAlign: 'center'
               }}>
                  <Typography
                     variant='h3'
                     sx={{
                        color: `${colors.grey[100]}`,
                        fontWeight: 'bold',
                        m: '10px 0 0 0'
                     }}>ssenick</Typography>
                  <Typography variant='h5' sx={{color: `${colors.greenAccent[500]}`}}>Main Admin</Typography>
               </Box>
            </Box>
         }
         <Box paddingLeft={isCollapsed ? undefined : '10%'}>
            <Menu>
               <ItemMenu
                  title='Dashboard'
                  to='/'
                  icon={<HomeOutlinedIcon/>}
                  selected={selected}
                  setSelected={setSelected}
               />
               <Typography
                  variant='h6'
                  color={colors.grey[300]}
                  sx={{m: '15px 0 5px 20px'}}
               >
                  Data
               </Typography>
               <ItemMenu
                  title='Manage Team'
                  to='/team'
                  icon={<PeopleOutlineOutlinedIcon/>}
                  selected={selected}
                  setSelected={setSelected}
               />
               <ItemMenu
                  title='Contacts Information'
                  to='/contacts'
                  icon={<ContactsOutlinedIcon/>}
                  selected={selected}
                  setSelected={setSelected}
               />
               <ItemMenu
                  title='Invoices Balances'
                  to='/invoices'
                  icon={<AccountBalanceWalletOutlinedIcon/>}
                  selected={selected}
                  setSelected={setSelected}
               />
               <Typography
                  variant='h6'
                  color={colors.grey[300]}
                  sx={{m: '15px 0 5px 20px'}}
               >
                  Pages
               </Typography>
               <ItemMenu
                  title='Profile Form'
                  to='/form'
                  icon={<PersonOutlineOutlinedIcon/>}
                  selected={selected}
                  setSelected={setSelected}
               />
               <ItemMenu
                  title='Calendar'
                  to='/calendar'
                  icon={<CalendarMonthOutlinedIcon/>}
                  selected={selected}
                  setSelected={setSelected}
               />
               <ItemMenu
                  title='FAQ'
                  to='/faq'
                  icon={<HelpOutlineOutlinedIcon/>}
                  selected={selected}
                  setSelected={setSelected}
               />
               <Typography
                  variant='h6'
                  color={colors.grey[300]}
                  sx={{m: '15px 0 5px 20px'}}
               >
                  Charts
               </Typography>
               <ItemMenu
                  title='Bar Chart'
                  to='/bar'
                  icon={<BarChartOutlinedIcon/>}
                  selected={selected}
                  setSelected={setSelected}
               />
               <ItemMenu
                  title='Pie Chart'
                  to='/pie'
                  icon={<PieChartOutlineOutlinedIcon/>}
                  selected={selected}
                  setSelected={setSelected}
               />
               <ItemMenu
                  title='Line Chart'
                  to='/line'
                  icon={<TimelineOutlinedIcon/>}
                  selected={selected}
                  setSelected={setSelected}
               />
               <ItemMenu
                  title='Geography Chart'
                  to='/geography'
                  icon={<MapOutlinedIcon/>}
                  selected={selected}
                  setSelected={setSelected}
               />
            </Menu>
         </Box>
      </Sidebar>
   );
};

export default MySidebar;