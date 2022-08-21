import { css } from '@emotion/css'

export const sModal = css`
    width: 100%;
    height: 100%;

    display: grid;
    place-items: center;

    position: fixed;
    top: 0;
    left: 0;

    padding: 20px;

    background-color: rgba(0, 0, 0, 0.5);
`

export const sModalContent = css`
    width: 100%;

    padding: 10px;

    display: flex;
    flex-direction: column;

    border-radius: 6px;

    background-color: white;
`

export const sModalHeader = css`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 20px;
`

export const sModalExit = css`
    cursor: pointer;

    display: grid;
    place-items: center;
`

export const sModalContentSmall = css`
    max-width: 400px;
`

export const sModalContentMedium = css`
    max-width: 700px;
`

export const sModalContentLarge = css`
    max-width: 900px;
`
