import React from 'react'

import { LoadingIcon } from '@/assets'
import { getFormattedDate } from '@/utils'
import { Table, Status, Select } from '@/components'

import { DashboardViewsProps } from './types'
import {
    sTableLeft,
    sTableLink,
    sDashboardContent,
    sDashboardLoading,
    sDashboardNoLogActivity,
} from './styles'

const DashboardViews = ({
    isLoading,
    listOfChildren,
    linkOpenHandler,
    listOfLogActivity,
    childrenChangeHandler,
}: DashboardViewsProps) => {
    return (
        <>
            {isLoading ? (
                <div className={sDashboardLoading}>
                    <LoadingIcon size='s' />
                </div>
            ) : (
                <div className={sDashboardContent}>
                    <Select
                        label="Children's Name"
                        onChange={childrenChangeHandler}
                    >
                        {listOfChildren.map((child) => {
                            return (
                                <option key={child.id} value={child.id}>
                                    {child.name}
                                </option>
                            )
                        })}
                    </Select>
                    <div>
                        <Table>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listOfLogActivity.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td
                                                onClick={() =>
                                                    linkOpenHandler(
                                                        item.web_url
                                                    )
                                                }
                                                className={sTableLeft}
                                            >
                                                <p className={sTableLink}>
                                                    {item.web_title}
                                                </p>
                                            </td>
                                            <td>
                                                {getFormattedDate(
                                                    item.date,
                                                    'MMM DD, yyyy hh:mm:ss'
                                                )}
                                            </td>
                                            <td>
                                                {item.status === '0' ? (
                                                    <Status type='negative'>
                                                        Negative
                                                    </Status>
                                                ) : (
                                                    <Status type='positive'>
                                                        Positive
                                                    </Status>
                                                )}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                        {listOfLogActivity.length === 0 && (
                            <div className={sDashboardNoLogActivity}>
                                <p>No Log Activity Available</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default DashboardViews
