import { AppProps } from 'next/app';
import Nav from 'src/components/nav';
import theme from 'theme';
import { ThemeProvider } from 'theme-ui';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Nav />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default App;
