import React from 'react'

import { HomeModule } from '@/modules'
import { PageWrapper } from '@/layout'

const home = () => {
    return (
        <PageWrapper layoutType='plain'>
            <HomeModule />
        </PageWrapper>
    )
}

export default home
