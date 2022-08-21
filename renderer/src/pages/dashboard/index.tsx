import React from 'react'

import { PageWrapper } from '@/layout'
import { DashboardModule } from '@/modules'

const dashboard = () => {
    return (
        <PageWrapper layoutType='base' title='Dashboard'>
            <DashboardModule />
        </PageWrapper>
    )
}

export default dashboard
