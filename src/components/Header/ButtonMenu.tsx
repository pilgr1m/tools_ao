import React, { FC, useEffect } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { uniqueId } from 'lodash'
import { NavLink } from 'react-router-dom'
import { pageType } from '../../types'

type Props = {
  page: pageType,
  screenSize: any
}

export const ButtonMenu: FC<Props> = ({
  page,
  screenSize,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    screenSize < 900 && setAnchorEl(null)
  }, [screenSize])

  return (
    <>
      {
        page.subPages
          ? (
            <>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name.toUpperCase()}
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{ 'aria-labelledby': 'basic-button' }}
              >
                { page.subPages.map((sp: string) => (
                  <MenuItem
                    key={uniqueId()}
                    onClick={handleClose}
                    sx={{ fontSize: 14 }}
                  >
                    <NavLink
                      to={sp}
                      style={{ color: 'grey', textDecoration: 'none' }}
                    >
                      {sp.toUpperCase()}
                    </NavLink>
                  </MenuItem>
                ))}
              </Menu>
            </>
          )
          : (
            <NavLink
              to={page.name}
              style={{ color: 'grey', textDecoration: 'none' }}
            >
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name.toUpperCase()}
              </Button>
            </NavLink>
          )
      }
    </>
  )
}
