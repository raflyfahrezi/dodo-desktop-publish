import { css } from '@emotion/css'

import { theme } from '@/styles'

export const sButton = css`
    color: ${theme.color.primary.white};

    font-weight: bold;
    font-size: ${theme.font.size[16]};

    transition: 0.2s all;

    border: none;
    border-radius: 6px;

    cursor: pointer;

    padding: 10px 12px;

    &:active {
        transform: scale(0.95);
    }

    &:disabled {
        background-color: ${theme.color.secondary.lightGrey};
    }
`

export const sButtonPrimary = css`
    background-color: ${theme.color.primary.lightGreen};
`

export const sButtonSecondary = css`
    background-color: ${theme.color.secondary.lightOrange2};
`

export const sButtonTertiary = css`
    color: ${theme.color.secondary.grey};
    border: 2px solid ${theme.color.secondary.grey};
    background-color: ${theme.color.primary.white};
`

export const sButtonRed = css`
    color: ${theme.color.primary.white};
    border: 2px solid ${theme.color.primary.lightRed};
    background-color: ${theme.color.primary.lightRed};
`

export const sButtonFull = css`
    width: 100%;
`
