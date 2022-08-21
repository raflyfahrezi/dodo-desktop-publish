import React from 'react'
import { Global as GlobalProvider, css } from '@emotion/react'

import { theme } from '@/styles'

import scrollbar from '../scrollbar'

const sGlobal = css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: ${theme.font.family};
    }

    ${scrollbar}
`

const Global = () => {
    return <GlobalProvider styles={sGlobal} />
}

export default Global
