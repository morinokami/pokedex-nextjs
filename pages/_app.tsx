import React from 'react'
import '../styles/globals.scss'
import { AppProps } from 'next/app'

const MyApp: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
