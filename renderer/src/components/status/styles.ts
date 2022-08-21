import { css } from '@emotion/css'

import { theme } from '@/styles'

export const sStatus = css`
    color: white;

    font-size: ${theme.font.size[14]};

    padding: 6px 4px;

    border-radius: 8px;
`

export const sStatusPositive = css`
    background-color: #ff5757;
`

export const sStatusNegative = css`
    background-color: #4e773f;
`
