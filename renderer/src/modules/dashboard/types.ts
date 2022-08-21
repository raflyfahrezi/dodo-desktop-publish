import { FormEvent } from 'react'

import { UserChild, LogActivity } from '@/models'

export interface DashboardViewsProps {
    isLoading: boolean
    listOfChildren: UserChild[]
    listOfLogActivity: LogActivity[]
    linkOpenHandler: (url: string) => void
    childrenChangeHandler: (e: FormEvent<HTMLSelectElement>) => void
}
