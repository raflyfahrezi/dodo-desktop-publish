import React from 'react'
import { useRouter } from 'next/router'

import { Button } from '@/components'
import { DodoTextLogo } from '@/assets'
import { Paragraph } from '@/typography'

import Route from './route'
import { Routes } from './helpers'
import { BaseProps } from './types'
import {
    sBase,
    sBaseHeader,
    sBaseContent,
    sBaseNavigation,
    sBaseHeaderTitle,
    sBaseNavigationLogo,
    sBaseNavigationList,
    sBaseChildrenWrapper,
    sBaseNavigationFooter,
    sBaseNavigationContent,
} from './styles'

const Base = ({ title, children }: BaseProps) => {
    const router = useRouter()

    const logOutButtonHandler = () => {
        router.push('/auth/login')
    }

    return (
        <div className={sBase}>
            <div className={sBaseNavigation}>
                <div className={sBaseNavigationContent}>
                    <div className={sBaseNavigationLogo}>
                        <DodoTextLogo />
                    </div>
                    <div className={sBaseNavigationList}>
                        {Routes.map((item, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={item.path}
                                    icon={item.icon}
                                    isActive={router.pathname === item.path}
                                >
                                    {item.children}
                                </Route>
                            )
                        })}
                    </div>
                    <div>
                        <Button
                            onClick={logOutButtonHandler}
                            type='button'
                            variant='secondary'
                            fullWidth
                        >
                            Log Out
                        </Button>
                    </div>
                </div>
                <div className={sBaseNavigationFooter}>
                    <Paragraph variant='xs' white>
                        Dodo Team &copy; 2022
                    </Paragraph>
                </div>
            </div>
            <div className={sBaseContent}>
                <div className={sBaseHeader}>
                    <Paragraph
                        className={sBaseHeaderTitle}
                        variant='l'
                        weight='bold'
                    >
                        {title}
                    </Paragraph>
                </div>
                <div className={sBaseChildrenWrapper}>{children}</div>
            </div>
        </div>
    )
}

export default Base
