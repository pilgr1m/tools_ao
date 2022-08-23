import React, { FC } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { UserAvatar } from './UserAvatar'
import { HeaderButtonsMenu } from './HeaderButtonsMenu'

type Props = {

}

export const Header: FC<Props> = () => (
  <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          App AO
        </Typography>

        {/* button menu */}
        <HeaderButtonsMenu />

        {/* avatar block */}
        <UserAvatar />

      </Toolbar>
    </Container>
  </AppBar>
)
