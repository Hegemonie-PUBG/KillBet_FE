import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0045f2',
    },
    secondary: {
      main: '#dffe07',
    },
    info: grey,
    error: {
      main: '#fe0156',
    },
    warning: {
      main: '#ffb700',
    },
    success: {
      main: '#05dd31',
    },
  },
});

export default theme;
