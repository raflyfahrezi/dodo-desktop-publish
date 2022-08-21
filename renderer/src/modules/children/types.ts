import { FormEvent } from 'react'

import { UserChild } from '@/models'

export interface FormData {
    name: string
}

export interface ChildrenViewsProps {
    formData: FormData
    isLoading: boolean
    isModalOpen: boolean
    isFormLoading: boolean
    listOfChildren: UserChild[]
    openModalHandler: () => void
    closeModalHandler: () => void
    formOnSubmitHandler: (event: FormEvent<HTMLFormElement>) => void
    inputOnChangeHandler: (event: FormEvent<HTMLInputElement>) => void
}
