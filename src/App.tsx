import { useState } from 'react';
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/themes";
import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Perfil } from "./pages/Perfil/Perfil";
import { Preferencias } from "./pages/Preferencias/Preferencias";

function App() {
  const [tema, setTema] = useState<string>('light');

  return (
    <ThemeProvider theme={tema === 'light' ? lightTheme : darkTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />          
          <Route path="/preferencias" element={<Preferencias onToggleTheme={(tema) => setTema(tema)} />} />          
        </Routes>        
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
