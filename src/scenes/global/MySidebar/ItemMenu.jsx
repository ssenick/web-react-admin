import React, {memo} from "react";
import {Link} from "react-router-dom";
import {MenuItem} from "react-pro-sidebar";
import {Typography} from "@mui/material";

const ItemMenu = memo(({title, to, icon, selected, setSelected}) => {
   return (
      <MenuItem
         component={ <Link to={to}/>}
         icon={icon}
         active={selected === to}
         onClick={() => setSelected(title)}>
         <Typography>{title}</Typography>
      </MenuItem>
   )
})
export default ItemMenu