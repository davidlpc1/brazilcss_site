import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AppProps } from 'next/app'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Roboto', sans-serif;
  }
`

const theme = {
  colors: {
    primary: '#1B73BA',
    secondary:"#fff62d",
    terciare:"#009b3a"
  },
}

export default function App({ Component, pageProps }:AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
