import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import { uniqueId } from 'lodash'

type PropsType = {

}

const cities = ['Bridgewatch', 'Caerleon', 'Fort Sterling', 'Lymhurst', 'Martlock', 'Thetford']

export const HeaderContent: FC<PropsType> = () => (
  <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={1}>
      <Grid
          // xs={10}
        md={2}
        lg={2}
        sx={{ border: 'solid 1px blue' }}
      >
        Price legend:
      </Grid>
      <Grid
        container
          // xs={12}
        md={10}
        lg={10}
      >
        {cities.map(c => (
          <Grid
            key={uniqueId()}
            xs={2}
            lg={2}
            sx={{ border: 'solid 1px green' }}
            className="whitespace-nowrap"
          >
            {c}
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Box>
)
