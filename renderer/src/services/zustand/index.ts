import create from 'zustand'

import { UserChild, UserParent } from '@/models'

import { State } from './types'
import {
    setUser,
    setIsBannerOpen,
    setChildrenList,
    setIsAuthenticating,
} from './helpers'

const state = create<State>((set: any) => ({
    user: undefined,
    isBannerOpen: true,
    isAuthenticating: true,
    childrenList: [],

    setUser: (value?: UserParent) => setUser(set, value),
    setIsBannerOpen: (value: boolean) => setIsBannerOpen(set, value),
    setChildrenList: (value: UserChild[]) => setChildrenList(set, value),
    setIsAuthenticating: (value: boolean) => setIsAuthenticating(set, value),
}))

export default state
