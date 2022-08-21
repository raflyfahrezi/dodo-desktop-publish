import React from 'react'

import { PageWrapper } from '@/layout'
import { ChildrenModule } from '@/modules'

const children = () => {
    return (
        <PageWrapper layoutType='base' title='Children'>
            <ChildrenModule />
        </PageWrapper>
    )
}

export default children
