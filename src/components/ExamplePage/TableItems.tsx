import React, { FC } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useSelector } from 'react-redux'
import { RowTable } from './RowTable'
import { uniqueId } from 'lodash'
import { itemsSelector } from '../../features'
import { generateItemsByType } from '../../utils'

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
