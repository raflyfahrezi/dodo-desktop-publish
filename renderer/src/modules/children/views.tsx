import React from 'react'

import { LoadingIcon } from '@/assets'
import { getFormattedDate } from '@/utils'
import { Modal, Input, Button, Table } from '@/components'

import { ChildrenViewsProps } from './types'
import {
    sChildren,
    sChildrenLoading,
    sChildrenTableLeft,
    sChildrenModalButton,
} from './styles'

const ChildrenViews = ({
    formData,
    isLoading,
    isModalOpen,
    isFormLoading,
    listOfChildren,
    openModalHandler,
    closeModalHandler,
    formOnSubmitHandler,
    inputOnChangeHandler,
}: ChildrenViewsProps) => {
    return (
        <>
            <Modal
                size='small'
                title='Add New Children'
                isOpen={isModalOpen}
                onClose={closeModalHandler}
            >
                <form onSubmit={formOnSubmitHandler}>
                    <Input
                        name='name'
                        type='text'
                        label='Name'
                        value={formData.name}
                        disabled={isFormLoading}
                        onChange={inputOnChangeHandler}
                    />
                    <div className={sChildrenModalButton}>
                        <Button
                            variant='tertiary'
                            onClick={closeModalHandler}
                            fullWidth
                        >
                            Cancel
                        </Button>
                        <Button type='submit' fullWidth>
                            Create
                        </Button>
                    </div>
                </form>
            </Modal>
            <div className={sChildren}>
                <div>
                    <div>
                        <Button onClick={openModalHandler}>
                            Add New Child
                        </Button>
                    </div>
                </div>
                <div>
                    {isLoading ? (
                        <div className={sChildrenLoading}>
                            <LoadingIcon size='s' />
                        </div>
                    ) : (
                        <Table>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Created at</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listOfChildren.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td className={sChildrenTableLeft}>
                                                {item.name}
                                            </td>
                                            <td>
                                                {getFormattedDate(
                                                    item.created_at
                                                )}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    )}
                </div>
            </div>
        </>
    )
}

export default ChildrenViews
