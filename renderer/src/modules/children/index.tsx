import { useSnackbar } from 'notistack'
import React, { useRef, useEffect, useState, FormEvent } from 'react'

import { UserChild } from '@/models'
import { zustand } from '@/services'
import { axiosGet, axiosPost } from '@/utils'

import { FormData } from './types'
import ChildrenViews from './views'

const ChildrenModule = () => {
    const isFirstRender = useRef(true)

    const { enqueueSnackbar } = useSnackbar()

    const state = {
        user: zustand((zustandState) => zustandState.user),
    }

    const defaultFormData = {
        name: '',
    }

    const [isLoading, setIsLoading] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [isFormLoading, setIsFormLoading] = useState<boolean>(false)
    const [listOfChildren, setListOfChildren] = useState<UserChild[]>([])
    const [formData, setFormData] = useState<FormData>({
        ...defaultFormData,
    })

    const openModalHandler = () => {
        setIsModalOpen(true)
    }

    const closeModalHandler = () => {
        setIsModalOpen(false)
    }

    const inputOnChangeHandler = (e: FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget

        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const formOnSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const { user } = state

        try {
            setIsFormLoading(true)

            enqueueSnackbar('Adding children', { variant: 'info' })

            const response = await axiosPost(
                'child//register-user',
                { ...formData },
                {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                }
            )

            setIsModalOpen(false)
            setFormData({ ...defaultFormData })

            enqueueSnackbar(response.data.message, { variant: 'success' })
        } catch (error) {
            enqueueSnackbar(error.response.data.message, { variant: 'error' })
        } finally {
            setIsFormLoading(false)
        }
    }

    const getListOfChildren = async () => {
        const { user } = state

        try {
            const response = await axiosGet('child//get-user', {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            })

            const responseData = response.data.data

            setListOfChildren(responseData)
        } catch (error) {
            enqueueSnackbar(error.response.data.message, { variant: 'error' })
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (isFirstRender.current) {
            setIsLoading(true)

            getListOfChildren()

            isFirstRender.current = false
        } else {
            getListOfChildren()
        }
    }, [isModalOpen])

    return (
        <ChildrenViews
            formData={formData}
            isLoading={isLoading}
            isModalOpen={isModalOpen}
            isFormLoading={isFormLoading}
            listOfChildren={listOfChildren}
            openModalHandler={openModalHandler}
            closeModalHandler={closeModalHandler}
            formOnSubmitHandler={formOnSubmitHandler}
            inputOnChangeHandler={inputOnChangeHandler}
        />
    )
}

export default ChildrenModule
