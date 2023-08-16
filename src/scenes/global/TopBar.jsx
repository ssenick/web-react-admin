import React, {useContext} from 'react';

import {ColorModeContext, tokens} from "../../theme";
import {Box, IconButton, InputBase, useTheme} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const TopBar = () => {
   const theme = useTheme()
   const colors = tokens(theme.palette.mode)
   const colorMode = useContext(ColorModeContext)
   return (
      <Box display='flex' justifyContent='space-between' p={2}>
         <Box display='flex' bgcolor={colors.primary[400]}>
            <InputBase sx={{ml: 2, flex: 1}} placeholder='Search'/>
            <IconButton type='button' sx={{p: 1}}>
               <SearchIcon/>
            </IconButton>
         </Box>
         <Box display='flex'>
            <IconButton onClick={colorMode.toggleColorMode}>
               {theme.palette.mode === 'dark' ?
                  <DarkModeOutlinedIcon/>
                  :
                  <LightModeOutlinedIcon/>
               }

            </IconButton>
            <IconButton>
               <NotificationsNoneOutlinedIcon/>
            </IconButton>
            <IconButton>
               <SettingsOutlinedIcon/>
            </IconButton>
            <IconButton>
               <PersonOutlineOutlinedIcon/>
            </IconButton>
         </Box>
      </Box>
   );
};

export default TopBar;