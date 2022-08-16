import React, { FC, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { useSelector } from 'react-redux'
import { itemsSelector } from '../../features'

const createData = (
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  price: number,
) => ({
  name,
  calories,
  fat,
  carbs,
  protein,
  price,
  history: [
    {
      date: '2020-01-05',
      customerId: '11091700',
      amount: 3,
    },
    {
      date: '2020-01-02',
      customerId: 'Anonymous',
      amount: 1,
    },
  ],
})

const Row = (props: { row: ReturnType<typeof createData> }) => {
  const { row } = props
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' }, backgroundColor: 'lightgrey' }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">-</TableCell>
        <TableCell align="right">-</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                NAME + icon
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead sx={{ backgroundColor: 'lightgrey' }}>
                  <TableRow>
                    <TableCell>City</TableCell>
                    <TableCell>Quality</TableCell>
                    <TableCell align="right">Buy Price Max</TableCell>
                    <TableCell align="right">Buy Price Min</TableCell>
                    <TableCell align="right">Sell Price Max</TableCell>
                    <TableCell align="right">Sell Price Min</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">{historyRow.date}</TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

const rows = [
  // grouped items for table
  createData('Seed', 159, 6.0, 24, 4.0, 3.99),
  createData('Animal', 237, 9.0, 37, 4.3, 4.99),
  createData('Fishing', 262, 16.0, 24, 6.0, 3.79),
  createData('Potion', 305, 3.7, 67, 4.3, 2.5),
]

type Props = {
  itemsData: any
}

export const TableItems : FC<Props> = ({ itemsData }) => {
  const a = 1
  const farmableItems = useSelector(itemsSelector.getItems)

  console.log('farmableItems: ', farmableItems)
  // console.log('state: ', farmableItems)
  // console.log('itemsData: ', itemsData)

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell sx={{ fontSize: 15, fontWeight: 'bold' }}>Type</TableCell>
            <TableCell sx={{ fontSize: 15, fontWeight: 'bold' }} align="right">Sell time</TableCell>
            <TableCell sx={{ fontSize: 15, fontWeight: 'bold' }} align="right">Buy time</TableCell>
            <TableCell align="right" />
            <TableCell align="right" />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
