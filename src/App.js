// routes
import { createTheme, ThemeProvider } from '@mui/material';
import Router from './routes';
// theme
// import ThemeProvider from './theme';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router />
    </ThemeProvider>
  );
}
