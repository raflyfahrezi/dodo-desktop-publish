import { UserChild } from '@/models'

export interface ChildrenViewsProps {
    childrenList: UserChild[]
    childAccountButtonHandler: () => void
}