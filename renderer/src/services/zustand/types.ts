import { UserChild, UserParent } from '@/models'

export interface State {
    user: UserParent | undefined
    childrenList: UserChild[]
    isBannerOpen: boolean
    isAuthenticating: boolean

    setUser: (value?: UserParent) => void
    setIsBannerOpen: (value: boolean) => void
    setChildrenList: (value: UserChild[]) => void
    setIsAuthenticating: (value: boolean) => void
}
