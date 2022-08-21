import { shell } from 'electron'
import { useSnackbar } from 'notistack'
import React, { useState, useEffect, FormEvent } from 'react'

import { axiosGet } from '@/utils'
import { zustand } from '@/services'
import { LogActivity, UserChild } from '@/models'

import DashboardViews from './views'
import { getFilteredLogActivity } from './helpers'

const DashboardModule = () => {
    const { enqueueSnackbar } = useSnackbar()

    const state = {
        user: zustand((zustandState) => zustandState.user),
    }

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [listOfChildren, setListOfChildren] = useState<UserChild[]>([])
    const [listOfLogActivity, setListOfLogActivity] = useState<LogActivity[]>(
        []
    )
    const [baseListOfLogActivity, setBaseListOfLogActivity] = useState<
        LogActivity[]
    >([])

    const linkOpenHandler = (url: string) => {
        shell.openExternal(url)
    }

    const getLogActivityData = async () => {
        const { user } = state

        try {
            const dataLogActivity = await axiosGet('/log-activity/get-data', {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            })

            const dataChildren = await axiosGet('/child/get-user', {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            })

            const childrens = dataChildren.data.data
            const logActivities = dataLogActivity.data.data

            const filteredLogActivities = getFilteredLogActivity(
                childrens[0].id,
                logActivities
            )

            setListOfChildren(childrens)
            setListOfLogActivity(filteredLogActivities)
            setBaseListOfLogActivity(dataLogActivity.data.data)
        } catch (error) {
            enqueueSnackbar(error.response.data.message, { variant: 'error' })
        } finally {
            setIsLoading(false)
        }
    }

    const childrenChangeHandler = (event: FormEvent<HTMLSelectElement>) => {
        const { value } = event.currentTarget

        const filteredLogActivities = getFilteredLogActivity(
            Number(value),
            baseListOfLogActivity
        )

        setListOfLogActivity(filteredLogActivities)
    }

    useEffect(() => {
        getLogActivityData()
    }, [])

    return (
        <DashboardViews
            isLoading={isLoading}
            listOfChildren={listOfChildren}
            linkOpenHandler={linkOpenHandler}
            listOfLogActivity={listOfLogActivity}
            childrenChangeHandler={childrenChangeHandler}
        />
    )
}

export default DashboardModule
