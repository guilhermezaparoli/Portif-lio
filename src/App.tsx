import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/themes/light-theme';
import { GlobalStyle } from './styles/global';

import { Router } from './routes/Router';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
