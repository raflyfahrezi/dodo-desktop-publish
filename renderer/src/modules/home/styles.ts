import { css } from '@emotion/css'

import { theme } from '@/styles'

export const sHomeModule = css`
    width: 100%;
    height: 100%;

    position: fixed;
    top: 0;
    left: 0;

    display: grid;
    place-items: center;

    background-color: ${theme.color.primary.darkGreen};
`

export const sHomeModuleContent = css`
    width: 100%;
    max-width: 300px;

    display: flex;
    gap: 40px;
    flex-direction: column;
`

export const sHomeModuleLogo = css`
    width: 100%;
    max-width: 100px;

    margin: 0 auto;
`

export const sHomeModuleHeading = css`
    width: 100%;

    text-align: center;
`

export const sHomeModuleRoleWrapper = css`
    width: 100%;

    display: flex;
    justify-content: space-around;
`

export const sHomeModuleRole = css`
    width: 100px;
    height: 100px;

    border-radius: 3px;

    display: grid;
    place-items: center;

    cursor: pointer;

    background-color: transparent;

    border: 2px solid ${theme.color.primary.lightGreen};

    transition: 0.5s;

    &:hover {
        background-color: ${theme.color.primary.lightGreen};
    }

    &:active {
        transform: scale(0.95);
    }
`

export const sHomeModuleRoleItem = css`
    display: flex;
    gap: 10px;
    align-items: center;
    flex-direction: column;
`
