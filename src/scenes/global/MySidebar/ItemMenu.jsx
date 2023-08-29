import React, {memo, useCallback} from "react";
import {Link} from "react-router-dom";
import {MenuItem} from "react-pro-sidebar";
import {Typography} from "@mui/material";


const ItemMenu = memo(({title, to, icon, selected, setSelected}) => {
   const  selectMenuItem =  useCallback(() => setSelected(title),[])
   return (
      <MenuItem
         component={ <Link to={to}/>}
         icon={icon}
         active={selected === to}
         onClick={selectMenuItem}>
         <Typography>{title}</Typography>
      </MenuItem>
   )
})
export default ItemMenu