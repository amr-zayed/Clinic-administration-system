import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Login from './Components/Login/Login';
import DoctorPortal from './Components/Doctor/DoctorPortal';

const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#329BEB',
        paleBlue: '#E5EFF9',
        green: '#5BE499',
        black: '#141C2A',
        white: '#FEFEFE',
      }
    },
  },
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes >
          <Route path="login" element={<Login />} />
          <Route path="Dportal" element={<DoctorPortal />} />
        </Routes>
    </ThemeProvider>
  );
}

export default App;
