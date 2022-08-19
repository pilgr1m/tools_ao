import React, { FC } from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import { pageType } from '../../types'

type Props = {
  pages: pageType[],
  anchorElNav: any,
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>)=> void,
  handleCloseNavMenu: ()=> void,
}

export const HeaderMenuMobileView: FC<Props> = ({
  pages,
  anchorElNav,
  handleCloseNavMenu,
  handleOpenNavMenu,
}) => (
  <>
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        {pages.map((page) => (
          <MenuItem key={page.name} onClick={handleCloseNavMenu}>
            <Typography textAlign="center">{page.name.toUpperCase()}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="/home"
      sx={{
        mr: 2,
        display: { xs: 'flex', md: 'none' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      Tools AO
    </Typography>
  </>
)
