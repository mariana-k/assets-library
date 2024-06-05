import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import React from 'react'
import { store } from '@/store'
import './i18n'
import { appWithTranslation } from 'next-i18next'
import '@/style/globals.css'
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Head>
                <title>Assets Library</title>
            </Head>
            <Component {...pageProps} />
        </Provider>
    )
}

export default appWithTranslation(MyApp)
