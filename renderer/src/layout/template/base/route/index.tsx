import React from 'react'
import Link from 'next/link'
import { cx } from '@emotion/css'

import { Paragraph } from '@/typography'

import { RouteProps } from './types'
import { sRoute, sRouteIcon, sRouteActive } from './styles'

const Route = ({ path, icon, isActive, children }: RouteProps) => {
    return (
        <Link href={path} passHref>
            <a className={cx(sRoute, { [sRouteActive]: isActive })}>
                <div className={sRouteIcon}>{icon}</div>
                <Paragraph white>{children}</Paragraph>
            </a>
        </Link>
    )
}

export default Route
