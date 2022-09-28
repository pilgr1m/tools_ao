import React, { FC } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'
import { uniqueId } from 'lodash'
import { Link } from '@mui/material'
import { experimentalStyled as styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import { ExamplePage } from '../../../pages'

type PropsType = {

}

// TODO fix DRY HeaderContent/Tiers/Quality component in one func

const HeaderContent = () => {
  const cities = [
    'Bridgewatch',
    'Caerleon',
    'Fort Sterling',
    'Lymhurst',
    'Martlock',
    'Thetford',
  ]

  return (
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
}

const Tiers = () => {
  const tiers = [
    'T1', 'T2', 'T3', 'T4',
    'T5', 'T6', 'T7', 'T8',
  ]

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid
        // xs={10}
          md={2}
          lg={2}
          sx={{ border: 'solid 1px blue' }}
        >
          All tiers
        </Grid>
        <Grid
          container
        // xs={12}
          md={8}
          lg={8}
        >
          {tiers.map(t => (
            <Grid
              key={uniqueId()}
              xs={2}
              md={1}
              lg={1}
              sx={{ border: 'solid 1px green' }}
              className="whitespace-nowrap"
            >
              {t}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  )
}

const Quality = () => {
  const qualities = ['0', '1', '2', '3']

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid
        // xs={10}
          md={2}
          lg={2}
          sx={{ border: 'solid 1px blue' }}
        >
          Quality
        </Grid>
        <Grid
          container
        // xs={12}
          md={4}
          lg={10}
        >
          {qualities.map(q => (
            <Grid
              key={uniqueId()}
              xs={2}
              md={1}
              lg={1}
              sx={{ border: 'solid 1px green' }}
              className="whitespace-nowrap"
            >
              {q}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  )
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const Content = () => {
  const cards = []

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(17)).map((_) => (
          <Grid xs={2} sm={4} md={4} key={uniqueId()}>
            <Item>
              Item card <br />
              Price <br />
              Description <br />
              Weight <br />
              Icon
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export const ContentItemsPageContainer: FC<PropsType> = () => {
  const a = 1

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} columns={16}>
        <Grid xs={16} sx={{ border: 'solid 1px green' }}>
          <HeaderContent />
          <Box sx={{ border: 'solid 1px green', fontSize: 13 }}>
            *Prices are provided by the
            <Link
              href="https://www.albion-online-data.com/"
              underline="hover"
              sx={{ ml: 0.6 }}
            >
              Albion Online Data Project
            </Link>
          </Box>
          <Tiers />
          <Quality />

        </Grid>
        <ExamplePage />
        {/* <Grid xs={16} sx={{ border: 'solid 1px yellow', ml: 2, mt: 2 }}> */}
        {/*  CONTENT with cards */}
        {/*  <Content /> */}
        {/* </Grid> */}
      </Grid>
    </Box>
  )
}
