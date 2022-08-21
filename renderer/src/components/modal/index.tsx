import React from 'react'
import { cx } from '@emotion/css'

import { Cross } from '@/assets'
import { Paragraph } from '@/typography'

import { ModalProps } from './types'
import { getSizeStyles } from './helpers'
import { sModal, sModalContent, sModalHeader, sModalExit } from './styles'

const Modal = ({ size, title, isOpen, onClose, children }: ModalProps) => {
    return (
        <>
            {isOpen && (
                <div className={sModal}>
                    <div
                        className={cx(
                            sModalContent,
                            { [getSizeStyles('small')]: size === 'small' },
                            { [getSizeStyles('medium')]: size === 'medium' },
                            { [getSizeStyles('large')]: size === 'large' }
                        )}
                    >
                        <div className={sModalHeader}>
                            <Paragraph variant='l' weight='bold'>
                                {title}
                            </Paragraph>
                            <div
                                className={sModalExit}
                                onClick={() => onClose()}
                            >
                                <Cross />
                            </div>
                        </div>
                        <div>{children}</div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal
