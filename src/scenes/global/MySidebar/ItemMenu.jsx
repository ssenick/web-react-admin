import { Typography, useTheme} from "@mui/material";
import {tokens} from "../../../theme";
import {MenuItem} from "react-pro-sidebar";
import {Link} from "react-router-dom";
import React from "react";

 const ItemMenu = ({title, to, icon, selected, setSelected}) => {
   const theme = useTheme()
   const colors = tokens(theme.palette.mode)
   return (
      <MenuItem
         component={ <Link to={to}/>}
         icon={icon}
         active={selected === title}
         onClick={() => setSelected(title)}>
         <Typography>{title}</Typography>
      </MenuItem>
   )
}
export default ItemMenu