import logo from './logo.svg';
import styles from './App.module.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

var theme = createTheme({
  palette: {
    primary: {
      main: '#71d5f4',
      grey: '#6b728e',
      navy: '#404258',
      modalBg: '#13162E8A'
    },
    secondary: {
      main: '#b3261e'
    }
  }
});

function App() {
  return React.createElement(
    'div',
    { className: styles["App"] },
    React.createElement(
      'header',
      { className: styles["App-header"] },
      React.createElement('img', { src: logo, className: styles["App-logo"], alt: 'logo' }),
      React.createElement(
        'p',
        null,
        'Edit ',
        React.createElement(
          'code',
          null,
          'src/App.js'
        ),
        ' and save to reload.'
      ),
      React.createElement(
        'a',
        {
          className: 'App-link',
          href: 'https://reactjs.org',
          target: '_blank',
          rel: 'noopener noreferrer'
        },
        'Learn React'
      )
    )
  );
}

export default App;