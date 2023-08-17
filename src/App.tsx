import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/themes";
import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Home />
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
