import React from 'react'
import { SnackbarProvider } from 'notistack'

import type { AppProps } from 'next/app'

import { Global } from '@/styles'

import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/800.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <SnackbarProvider
            maxSnack={1}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
        >
            <Global />
            <Component {...pageProps} />
        </SnackbarProvider>
    )
}

export default MyApp
