import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {ColorModeContext, useMode} from "./theme";
import {Loading} from './components'
import {Bar, Calendar, Contacts, Dashboard, Faq, Form, Geo, Invoices, Line, Pie, Team} from './scenes/pages'
import {MySidebar, TopBar} from "./scenes/global";


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
                           <Route path='team' element={<Team/>}/>
                           <Route path='contacts' element={<Contacts/>}/>
                           <Route path='invoices' element={<Invoices/>}/>
                           <Route path='form' element={<Form/>}/>
                           <Route path='calendar' element={<Calendar/>}/>
                           <Route path='faq' element={<Faq/>}/>
                           <Route path='bar' element={<Bar/>}/>
                           <Route path='pie' element={<Pie/>}/>
                           <Route path='line' element={<Line/>}/>
                           <Route path='geography' element={<Geo/>}/>
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
