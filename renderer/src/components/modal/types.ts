import { ReactNode } from 'react'

export interface ModalProps {
    title: string
    isOpen: boolean
    size?: ModalSize
    onClose: () => void
    children: ReactNode
}

export type ModalSize = 'small' | 'medium' | 'large' | 'full'
