import { BrowserRouter } from "react-router-dom";
import Routes from "../../Routes";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../assets/styles/global";
import defaultTheme from "../../assets/styles/themes/default";

import HeaderContainer from "../Header";


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />

        <HeaderContainer />
        <Routes />

      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
