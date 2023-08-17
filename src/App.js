import {ColorModeContext, useMode} from "./theme";
import {CssBaseline,ThemeProvider} from "@mui/material";
import TopBar from "./scenes/global/TopBar";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./scenes/Dashboard";
import MySidebar from "./scenes/global/MySidebar/MySidebar";
// import Sidebar from "./scenes/global/Sidebar";
// import Dashboard from "./scenes/global/Dashboard";
// import Team from "./scenes/global/Team";
// import Invoices from "./scenes/global/Invoices";
// import Contacts from "./scenes/global/Contacts";
// import Bar from "./scenes/global/Bar";
// import Form from "./scenes/global/Form";
// import Line from "./scenes/global/Line";
// import Pie from "./scenes/global/Pie";
// import FAQ from "./scenes/global/faq";
// import Geography from "./scenes/global/Geography";
// import Calendar from "./scenes/global/Calendar";


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
                     <Routes>
                        <Route index element={<Dashboard/>} />
                        {/*<Route path='team' element={<Team/>} />*/}
                        {/*<Route path='invoices' element={<Invoices/>} />*/}
                        {/*<Route path='contacts' element={<Contacts/>} />*/}
                        {/*<Route path='bar' element={<Bar/>} />*/}
                        {/*<Route path='form' element={<Form/>} />*/}
                        {/*<Route path='line' element={<Line/>} />*/}
                        {/*<Route path='pie' element={<Pie/>} />*/}
                        {/*<Route path='faq' element={<FAQ/>} />*/}
                        {/*<Route path='geography' element={<Geography/>} />*/}
                        {/*<Route path='calendar' element={<Calendar/>} />*/}
                     </Routes>
                  </main>
               </div>
            </CssBaseline>
         </ThemeProvider>
      </ColorModeContext.Provider>
   );
}

export default App;
