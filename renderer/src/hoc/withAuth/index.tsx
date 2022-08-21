import { useRouter } from 'next/router'
import React, { ComponentType } from 'react'

import { zustand } from '@/services'

const withAuth = <Props extends {}>(Component: ComponentType<Props>) => {
    return (props: Props) => {
        const router = useRouter()

        const state = {
            user: zustand((zustandState) => zustandState.user),
        }

        if (typeof window !== 'undefined') {
            const { user } = state

            if (!user) {
                router.replace('/auth/login')
            }
        }

        return <Component {...props} />
    }
}

export default withAuth
