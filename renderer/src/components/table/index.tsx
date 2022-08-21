import React from 'react'

import { sTable } from './styles'
import { TableProps } from './types'

const Table = ({ children }: TableProps) => {
    return <table className={sTable}>{children}</table>
}

export default Table
