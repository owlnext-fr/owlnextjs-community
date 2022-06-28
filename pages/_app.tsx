import type { AppProps } from 'next/app'
import React, { useDebugValue, useEffect, useState } from 'react'
import Head from 'next/head'
import store from '../app/store'
import { Provider } from 'react-redux'
import Snackbar from 'app/components/System/Snackbar'


import SecurityWrapper from 'hooks/SecurityWrapper'

import 'react-perfect-scrollbar/dist/css/styles.css'
import "react-datepicker/dist/react-datepicker.css"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import 'rc-time-picker/assets/index.css'
import 'styles/globals.scss'

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
      const jssStyles = document.querySelector('#jss-server-side') as Element | null
      
      if (jssStyles) {
          jssStyles!.parentElement!.removeChild(jssStyles)
      }

      let app = document.getElementById('__next')
      if (app) {
        app.classList.add('appContainer');
      }
  }, []) 

  return (
    <Provider store={store}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SecurityWrapper>
          <>
            <Component {...pageProps} />
            <Snackbar />
          </>
      </SecurityWrapper>
    </Provider>
  )
}

export default App