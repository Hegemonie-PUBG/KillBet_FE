import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import {
  ThemeProvider as MuiThemeProvider,
  THEME_ID,
} from '@mui/material/styles';

import theme from '@/styles/theme';
import GlobalStyle from '@/styles/GlobalStyle';

import Layout from './Layout';

import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CssBaseline />
      <MuiThemeProvider theme={{ [THEME_ID]: theme }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MuiThemeProvider>
    </ThemeProvider>
  );
};

export default App;
