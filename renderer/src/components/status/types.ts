import { ReactNode } from 'react'

export type StatusType = 'positive' | 'negative'

export interface StatusProps {
    children: ReactNode
    type: StatusType
}
