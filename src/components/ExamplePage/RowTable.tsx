import React, { FC } from 'react'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import IconButton from '@mui/material/IconButton'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Collapse from '@mui/material/Collapse'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import { uniqueId } from 'lodash'
import { Avatar } from '@mui/material'
import { createPathIcon, generateDate } from '../../utils'

type PropsType = {
  row:any
}

export const RowTable: FC<PropsType> = ({ row }) => {
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
        <TableCell align="right" />
        <TableCell align="right" />
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History {row.name}
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead sx={{ backgroundColor: 'lightgrey' }}>
                  <TableRow>
                    <TableCell>Name(and Tier)</TableCell>
                    <TableCell>City</TableCell>
                    <TableCell>Quality</TableCell>
                    <TableCell align="right">Buy Price Max (and date)</TableCell>
                    <TableCell align="right">Buy Price Min</TableCell>
                    <TableCell align="right">Sell Price Max</TableCell>
                    <TableCell align="right">Sell Price Min</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.items.map((item:any) => (
                    <TableRow key={uniqueId()}>
                      <TableCell component="th" scope="row">
                        {item.item_id}
                        <Avatar
                          alt="icon_items"
                          src={createPathIcon(item.item_id)}
                          sx={{ width: 56, height: 56 }}
                        />
                      </TableCell>
                      <TableCell component="th" scope="row">{item.city}</TableCell>
                      <TableCell>{item.quality}</TableCell>
                      <TableCell align="right" sx={{ fontWeight: 700 }}>
                        {item.buy_price_max}
                        <br />
                        <span className="text-gray-400 font-normal text-xs">{generateDate(item.buy_price_max_date)}</span>
                      </TableCell>
                      <TableCell align="right" sx={{ fontWeight: 700 }}>
                        {item.buy_price_min}
                        <br />
                        <span className="text-gray-400 font-normal text-xs">{generateDate(item.buy_price_min_date)}</span>
                      </TableCell>
                      <TableCell align="right" sx={{ fontWeight: 700 }}>
                        {item.sell_price_max}
                        <br />
                        <span className="text-gray-400 font-normal text-xs">{generateDate(item.sell_price_max_date)}</span>
                      </TableCell>
                      <TableCell align="right" sx={{ fontWeight: 700 }}>
                        {item.sell_price_min}
                        <br />
                        <span className="text-gray-400 font-normal text-xs">{generateDate(item.sell_price_min_date)}</span>
                      </TableCell>
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
