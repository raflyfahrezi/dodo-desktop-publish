import React from 'react'
import NextHead from 'next/head'

import { HeadProps } from './types'

const Head = ({ title }: HeadProps) => {
    return (
        <NextHead>
            <title>{title}</title>
            <link rel='shortcut icon' href='/images/logo.png' />
        </NextHead>
    )
}

export default Head
