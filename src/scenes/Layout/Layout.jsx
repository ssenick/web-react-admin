import React from 'react';
import {MySidebar, TopBar} from "../global";
import {Outlet} from "react-router-dom";

const Layout = () => {
   return (
      <>
         <MySidebar/>
         <main className="content">
            <TopBar/>
            <Outlet/>
         </main>
      </>
   );
};

export default Layout;