import { css } from '@emotion/css'

import { theme } from '@/styles'

export const sAuth = css`
    width: 100%;
    height: 100%;

    display: flex;
    gap: 50px;

    position: fixed;
`

export const sAuthLeft = css`
    width: 100%;

    padding: 100px 30px 0 30px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const sAuthLeftText = css`
    width: 100%;

    display: flex;
    flex-direction: column;

    & h1 {
        color: ${theme.color.primary.darkGreen};
    }

    & p {
        color: ${theme.color.primary.lightGreen};
    }
`

export const sAuthLeftIcon = css`
    width: 100%;
    max-width: 400px;

    position: relative;
    top: 20px;

    margin: 0 auto;
`

export const sAuthRight = css`
    width: 100%;
    max-width: 350px;

    padding: 30px;

    overflow: auto;

    background-color: ${theme.color.primary.darkGreen};
`

export const sAuthRightLogo = css`
    width: 100%;
    max-width: 100px;

    margin-bottom: 30px;
`
