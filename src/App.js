import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {ColorModeContext, useMode} from "./theme";
import Loading from "./components/Loading";
import TopBar from "./scenes/global/TopBar";
import MySidebar from "./scenes/global/MySidebar/MySidebar";
import {Dashboard} from "./scenes/pages/Dashboard";
import {Team} from "./scenes/pages/Team";
import {Contacts} from "./scenes/pages/Contacts";
import {Invoices} from "./scenes/pages/Invoices";
import {Form} from "./scenes/pages/Form";
import {Calendar} from "./scenes/pages/Calendar";
import {Faq} from "./scenes/pages/Faq";
import {Bar} from "./scenes/pages/Bar";




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
                     <Suspense fallback={<Loading/>}>
                        <Routes>
                           <Route index element={<Dashboard/>}/>
                           <Route path='team' element={<Team/>} />
                           <Route path='contacts' element={<Contacts/>} />
                           <Route path='invoices' element={<Invoices/>} />
                           <Route path='form' element={<Form/>} />
                           <Route path='calendar' element={<Calendar/>} />
                           <Route path='faq' element={<Faq/>} />
                           <Route path='bar' element={<Bar/>} />
                           {/*<Route path='line' element={<Line/>} />*/}
                           {/*<Route path='pie' element={<Pie/>} />*/}
                           {/*<Route path='geography' element={<Geography/>} />*/}
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
