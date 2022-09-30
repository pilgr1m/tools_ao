import React, { FC, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import Grid from '@mui/material/Grid'

type PropsType = {
  priceSellMin: number
  city: string
  quality: number
}

export const PriceByCity: FC<PropsType> = ({
  priceSellMin,
  city,
  quality,
}) => {
  const [colorBg, setColorBg] = useState('')
  const colorOfCity = {
    Bridgewatch: 'rgb(251 191 36)',
    Caerleon: 'rgb(156 163 175)',
    Fort: 'rgb(224 242 254)',
    Lymhurst: 'rgb(163 230 53)',
    Martlock: 'rgb(96 165 250)',
    Thetford: 'rgb(167 139 250)',
    // subcities:
    'Black Market': 'rgb(156 163 175)',
    Merlyns: 'rgb(226 232 240)',
    Morganas: 'rgb(163 163 163)', // neutral 400
    Arthurs: 'rgb(163 163 163)',
  }

  const keys = Object.keys(colorOfCity)
  const cityKey = keys.find((key) => city.includes(key))
  const color = cityKey ? colorOfCity[cityKey as keyof typeof colorOfCity] : 'current'
  const priceWithSpaces = priceSellMin.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ' ')

  useEffect(() => {
    setColorBg(color)
  }, [color])

  if (priceWithSpaces === '0') return null

  const title = `${city}, quality:${quality}`

  return (
    <>
      <Tooltip title={title} arrow>
        <Grid
          xs="auto"
          item
          sx={{
            backgroundColor: colorBg,
            fontSize: 13,
            borderRadius: '5px',
            mr: 0.5,
            mb: 0.5,
            px: 0.5,
          }}
        >
          {priceWithSpaces}
        </Grid>
      </Tooltip>
    </>
  )
}
