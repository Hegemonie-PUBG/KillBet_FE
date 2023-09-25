import { createTheme } from '@mui/material/styles';
import { common, grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0045f2',
    },
    secondary: {
      main: '#dffe07',
    },
    info: {
      main: grey[400],
    },
    error: {
      main: '#fe0156',
    },
    warning: {
      main: '#ffb700',
    },
    success: {
      main: '#05dd31',
    },
    background: {
      paper: grey[50],
    },
    getContrastText(background) {
      switch (background) {
        case 'primary':
          return common.white;
        case 'secondary':
          return common.black;
        default:
          return common.black;
      }
    },
  },
  typography: {
    fontFamily: 'Pretendard-Regular',
    button: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;
