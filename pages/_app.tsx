import React from 'react'
import { AppProps } from 'next/app';
import '../styles/global.css'

const MyApp : React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
}

export default MyApp
