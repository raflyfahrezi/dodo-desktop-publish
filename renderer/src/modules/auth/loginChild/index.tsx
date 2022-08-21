import React from 'react'
import { ipcRenderer } from 'electron'

import { zustand } from '@/services'

import LoginChildViews from './views'

const LoginChild = () => {
    const state = {
        childrenList: zustand((zustandList) => zustandList.childrenList),
    }

    const childAccountButtonHandler = () => {
        ipcRenderer.send('systemTray', 'show')
    }

    return (
        <LoginChildViews
            childrenList={state.childrenList}
            childAccountButtonHandler={childAccountButtonHandler}
        />
    )
}

export default LoginChild
