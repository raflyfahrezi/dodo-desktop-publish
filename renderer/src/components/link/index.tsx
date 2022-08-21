import React from 'react'
import NextLink from 'next/link'

import { sLink } from './styles'
import { LinkProps } from './types'

const Link = ({ href, external, children }: LinkProps) => {
    if (!external) {
        return (
            <NextLink href={href} passHref>
                <a className={sLink}>{children}</a>
            </NextLink>
        )
    }

    return (
        <a href={href} className={sLink} ref='noreferrer' target='_blank'>
            {children}
        </a>
    )
}

export default Link
