import { css } from '@emotion/css'

import { theme } from '@/styles'

export const sTable = css`
    width: 100%;

    border-radius: 6px;
    border-collapse: collapse;

    overflow: hidden;

    & > thead > tr > th {
        color: white;

        padding: 12px;

        background-color: ${theme.color.primary.lightGreen};
    }

    & > tbody > tr > td {
        text-align: center;

        padding: 12px;
    }
`
