import React from 'react'

import { PageWrapper } from '@/layout'
import { RegisterModule } from '@/modules'

const register = () => {
    return (
        <PageWrapper
            layoutType='auth'
            title='Register'
            caption='Enter your email and password to register'
        >
            <RegisterModule />
        </PageWrapper>
    )
}

export default register
