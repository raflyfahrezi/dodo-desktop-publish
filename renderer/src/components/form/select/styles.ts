import { css } from '@emotion/css'

import { theme } from '@/styles'

export const sSelectWrapper = css`
    width: 100%;

    display: flex;
    gap: 6px;
    flex-direction: column;

    text-align: left;
`

export const sSelect = css`
    width: 100%;

    outline: none;

    border: none;
    border-radius: 6px;

    font-size: ${theme.font.size[16]};

    padding: 10px 16px;

    border: 2px solid ${theme.color.primary.lightGreen};

    transition: 0.2s all;

    &:focus {
        border: 2px solid ${theme.color.secondary.lightOrange};
    }

    &:disabled {
        background-color: ${theme.color.secondary.lightGrey};
    }
`
