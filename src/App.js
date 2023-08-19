import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {ColorModeContext, useMode} from "./theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import TopBar from "./scenes/global/TopBar";
import MySidebar from "./scenes/global/MySidebar/MySidebar";
import {Dashboard} from "./scenes/pages/Dashboard";
import {Team} from "./scenes/pages/Team";
import {Contacts} from "./scenes/pages/Contacts";
import {Invoices} from "./scenes/pages/Invoices";



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
                           <Route path='contacts' element={<Contacts/>} />
                           <Route path='invoices' element={<Invoices/>} />
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
