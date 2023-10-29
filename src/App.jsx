import AllRoutes from "./routes/AllRoutes";
import Topbar from "./scenes/global/Topbar";
import SidebarComponent from "./scenes/global/Sidebar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";


function App() {

  const [theme,colorMode]=useMode()

  return (
    <>
    <ColorModeContext.Provider  value={colorMode} >
      <ThemeProvider theme={theme}>
        <CssBaseline>
      <div className="app">
        <SidebarComponent/>
        <main className="content">
          <Topbar/>
          <AllRoutes/>
        </main>
      </div>
      </CssBaseline>
      </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
