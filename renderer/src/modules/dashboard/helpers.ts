import { LogActivity } from '@/models'

export const getFilteredLogActivity = (
    idChild: number,
    listOfLogActivity: LogActivity[]
) => {
    const filteredLogActivity = listOfLogActivity.filter(
        (item) => item.id_child === idChild
    )

    return filteredLogActivity
}
