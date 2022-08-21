import { HomeIcon, KidsIcon, LockIcon } from '@/assets'

import { RouteProps } from './route/types'

export const Routes: RouteProps[] = [
    {
        path: '/dashboard',
        icon: <HomeIcon />,
        children: 'Dashboard',
    },
    {
        path: '/children',
        icon: <KidsIcon />,
        children: 'Children',
    },
    {
        path: '/home',
        icon: <LockIcon />,
        children: 'Lock',
    },
]
