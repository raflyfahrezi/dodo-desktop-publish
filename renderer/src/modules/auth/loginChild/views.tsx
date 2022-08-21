import React from 'react'

import { Paragraph } from '@/typography'
import { Link, Button } from '@/components'
import { KidsIcon, DodoTextLogo } from '@/assets'

import { ChildrenViewsProps } from './types'
import {
    sLoginChild,
    sLoginAsParent,
    sLoginChildLogo,
    sLoginChildHeader,
    sLoginChildContent,
    sLoginChildAccount,
    sLoginChildAccountWrapper,
} from './styles'

const LoginChildViews = ({
    childrenList,
    childAccountButtonHandler,
}: ChildrenViewsProps) => {
    return (
        <div className={sLoginChild}>
            <div className={sLoginChildContent}>
                <div className={sLoginChildLogo}>
                    <DodoTextLogo />
                </div>
                {childrenList.length > 0 ? (
                    <>
                        <div className={sLoginChildHeader}>
                            <Paragraph variant='l' weight='bold' white>
                                Let me know who are you?
                            </Paragraph>
                            <Paragraph variant='xs' white>
                                Choose one of those children account and click
                                it to continue.
                            </Paragraph>
                        </div>
                        <div className={sLoginChildAccountWrapper}>
                            {childrenList.map((item) => {
                                return (
                                    <Link href='/home' key={item.id}>
                                        <button
                                            className={sLoginChildAccount}
                                            onClick={childAccountButtonHandler}
                                        >
                                            <KidsIcon />
                                            <Paragraph white>
                                                {item.name}
                                            </Paragraph>
                                        </button>
                                    </Link>
                                )
                            })}
                        </div>
                    </>
                ) : (
                    <div className={sLoginAsParent}>
                        <Paragraph variant='l' weight='bold' white>
                            Please do login as parent first.
                        </Paragraph>
                        <Link href='/auth/login'>
                            <Button>Login as Parent</Button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default LoginChildViews
