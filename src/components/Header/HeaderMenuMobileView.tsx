import React, { FC, ReactNode, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import { pageType } from '../../types'
//
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { uniqueId } from 'lodash'
import { NavLink } from 'react-router-dom'
//

type PropsType= {
  page: pageType
  handleCloseNavMenu: ()=>void
}

const NestedList: FC<PropsType> = ({ page, handleCloseNavMenu }) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <List sx={{ pb: 0 }}>
        <ListItemButton onClick={handleClick} sx={{ pl: 0, pt: 0 }}>
          {page.name.toUpperCase()}
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" sx={{ p: 0 }}>
            {page.subPagesDatabase && page.subPagesDatabase.map((sp: string) => (
              <MenuItem key={uniqueId()}>
                <NavLink
                  onClick={handleCloseNavMenu}
                  className="pl-1"
                  to={sp}
                >
                  {sp.toUpperCase()}
                </NavLink>
              </MenuItem>
            ))}
          </List>
        </Collapse>
      </List>
    </>
  )
}

type Props = {
  pages: pageType[],
  anchorElNav: Element | ((element: Element) => Element) | null | undefined,
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>)=> void,
  handleCloseNavMenu: ()=> void,
}

export const HeaderMenuMobileView: FC<Props> = ({
  pages,
  anchorElNav,
  handleCloseNavMenu,
  handleOpenNavMenu,
}) => {
  const a = 1

  return (
    <>
      <Box
        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
      >
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

        {/* TODO fix  -> jumping in menu */}
        <Menu
          variant="selectedMenu"
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{ display: { xs: 'block', md: 'none' }, minWidth: '250px' }}
        >
          {pages.map((page) => (
            <div key={uniqueId()}>
              {
                  page.subPagesDatabase
                    ? (
                      <MenuItem key={page.name}>
                        <NestedList
                          page={page}
                          handleCloseNavMenu={handleCloseNavMenu}
                        />
                      </MenuItem>
                    )
                    : (
                      <MenuItem
                        key={page.name}
                        onClick={handleCloseNavMenu}
                      >
                        <NavLink
                          to={page.name}
                        >
                          {page.name.toUpperCase()}
                        </NavLink>
                      </MenuItem>
                    )
                }
            </div>
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
}
