import './global.css'
import ReactDOM from "react-dom/client"
import MyRouter from './router/MyRouter'

import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import { StrictMode } from 'react';
import { red } from '@mui/material/colors';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

const theme = createTheme(
  {
    cssVariables: true,
    colorSchemes: {
      light: false,
      dark: true,
    },
    palette: {
      primary: { main: "#0000FF", contrastText: "#fff" },
      secondary: red,
    }
  }
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <StyledEngineProvider enableCssLayer>
          <ThemeProvider theme={theme}>
            <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
            <MyRouter />
          </ThemeProvider>
        </StyledEngineProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
);
