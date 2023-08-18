import React, {Suspense} from "react";
import {ColorModeContext, useMode} from "./theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import TopBar from "./scenes/global/TopBar";
import {Route, Routes} from "react-router-dom";
import MySidebar from "./scenes/global/MySidebar/MySidebar";
import {Dashboard} from "./scenes/pages/Dashboard";
import {Team} from "./scenes/pages/Team";

// import Sidebar from "./scenes/pages/global/Sidebar";
// import Dashboard from "./scenes/global/pages/Dashboard";
// import Team from "./scenes/global/pages/Team";
// import Invoices from "./scenes/global/pages/Invoices";
// import Contacts from "./scenes/global/pages/Contacts";
// import Bar from "./scenes/global/pages/Bar";
// import Form from "./scenes/global/pages/Form";
// import Line from "./scenes/global/pages/Line";
// import Pie from "./scenes/global/pages/Pie";
// import FAQ from "./scenes/global/pages/faq";
// import Geography from "./scenes/pages/global/Geography";
// import Calendar from "./scenes/pages/global/Calendar";


function App() {
   const [theme, colorMode] = useMode();
   return (
      <ColorModeContext.Provider value={colorMode}>
         <ThemeProvider theme={theme}>
            <CssBaseline>
               <div className="app">
                  <MySidebar/>
                  <main className="content">
                     <TopBar/>
                     <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                           <Route index element={<Dashboard/>}/>
                           <Route path='team' element={<Team/>} />
                           {/*<Route path='invoices' element={<Invoices/>} />*/}
                           {/*<Route path='contacts' element={<Contacts/>} />*/}
                           {/*<Route path='bar' element={<Bar/>} />*/}
                           {/*<Route path='form' element={<Form/>} />*/}
                           {/*<Route path='line' element={<Line/>} />*/}
                           {/*<Route path='pie' element={<Pie/>} />*/}
                           {/*<Route path='faq' element={<FAQ/>} />*/}
                           {/*<Route path='geography' element={<Geography/>} />*/}
                           {/*<Route path='calendar' element={<Calendar/>} />*/}
                           <Route path='*' element={<Dashboard/>}/>
                        </Routes>
                     </Suspense>
                  </main>
               </div>
            </CssBaseline>
         </ThemeProvider>
      </ColorModeContext.Provider>
   );
}

export default App;
