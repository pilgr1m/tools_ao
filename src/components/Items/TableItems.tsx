import React, { FC } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useSelector } from 'react-redux'
import { itemsSelector } from '../../features'
import { RowTable } from './RowTable'
import { generateItemsByType } from '../../utils'
import { uniqueId } from 'lodash'

// 0:
// calories: 159
// carbs: 24
// fat: 6
// history: Array(2)
// 0: {date: '2020-01-05', customerId: '11091700', amount: 3}
// 1: {date: '2020-01-02', customerId: 'Anonymous', amount: 1}
// length: 2
// name: "Seed"
// price: 3.99
// protein: 4

// console.log('rows: ', rows)

type PropsType = {
  itemsData: any
}

export const TableItems : FC<PropsType> = ({ itemsData }) => {
  const farmableItems = useSelector(itemsSelector?.getItems)

  const data = farmableItems && generateItemsByType(farmableItems)

  // console.log('farmableItems: ', farmableItems)
  // console.log('data: ', data)
  // console.log('state: ', farmableItems)
  // console.log('itemsData: ', itemsData)

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell sx={{ fontSize: 15, fontWeight: 'bold' }}>Type</TableCell>
            <TableCell sx={{ fontSize: 15, fontWeight: 'bold' }} align="right" />
            <TableCell sx={{ fontSize: 15, fontWeight: 'bold' }} align="right" />
            <TableCell align="right" />
            <TableCell align="right" />
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row:any) => (
            <RowTable key={uniqueId()} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
