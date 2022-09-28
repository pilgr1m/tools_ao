import React, { FC, useEffect } from 'react'
import { uniqueId } from 'lodash'
import { PriceByCity } from './PriceByCity'
import CardMedia from '@mui/material/CardMedia'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

type PropsType = {
 items: any
}

export const ItemCard: FC<PropsType> = ({ items }) => {
  // name cape -> novice's cape, adept's cape...
  const TierName111: any = {
    T2: 'Novice',
    T3: 'Journeyman',
    T4: 'Adept',
    T5: 'Expert',
    T6: 'Master',
    T7: 'Grandmaster',
    T8: 'Elder',
  }

  const tier = items[0]?.item_id.slice(0, 2)

  return (
    <Box sx={{
      width: 250,
      border: 'solid 1px rgba(0,155,155,0.1)',
      borderRadius: '8px',
      backgroundColor: 'rgba(176,176,176,0.1)',
      boxSizing: 'border-box',
      marginBottom: '10px',
    }}
    >
      <Grid container columns={12}>
        <Grid item xs="auto" sx={{ paddingLeft: 0 }}>
          <CardMedia
            component="img"
            sx={{ width: 64 }}
            image={`https://render.albiononline.com/v1/item/${items[0]?.item_id}.png`}
            alt="item icon"
          />
        </Grid>

        <Grid item xs={8}>
          {`${TierName111[tier]}'s item`}
        </Grid>

        <Grid item xs={12} sx={{ pl: 0.5 }}>
          <Grid container>
            {
            items.map((item: any) => (
              <PriceByCity
                priceSellMin={item.sell_price_min}
                city={item.city}
                quality={item.quality}
                key={uniqueId()}
              />
            ))
          }
          </Grid>
        </Grid>

      </Grid>
    </Box>
  )
}
