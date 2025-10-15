import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#6200EE' },
    text: { primary: '#333', secondary: '#666' },
    divider: '#EEE',
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h5: { fontWeight: 600 },
    body1: { fontSize: '0.9rem' },
    body2: { fontSize: '0.8rem' },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          minWidth: 'unset',
          padding: '6px 16px',
          '&.Mui-selected': {
            backgroundColor: '#E0E0E0',
            borderRadius: '4px',
            color: 'black',
            fontWeight: 600,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: { display: 'none' },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none' },
        containedPrimary: {
          backgroundColor: '#6200EE',
          '&:hover': { backgroundColor: '#3700B3' },
        },
        outlined: {
          borderColor: '#CCC',
          color: '#333',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            backgroundColor: 'white',
            '& fieldset': { borderColor: '#CCC' },
            '&:hover fieldset': { borderColor: '#999' },
            '&.Mui-focused fieldset': { borderColor: '#6200EE' },
          },
        },
      },
    },
  },
});

export default theme;
