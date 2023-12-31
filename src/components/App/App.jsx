import { BrowserRouter } from "react-router-dom";
import Routes from "../../Routes";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../assets/styles/global";
import defaultTheme from "../../assets/styles/themes/default";


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />

        <Routes />
        
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
