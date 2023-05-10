import { Provider } from 'react-redux';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import Navbar from './features/navbar/Navbar';
import Header from './features/header/Header';

import { store } from './app/store';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div className="App">
          <Navbar />
          <Header />
        </div>
      </ThemeProvider>
    </Box>
  );
}

export function WrappedApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
