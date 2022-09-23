import React, { FC, useEffect, useState } from 'react'
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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  // TODO will add logic for opening menu onHover
  // const [isOpenMenu, setIsOpenMenu] = useState(false)
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
        page.subPagesDatabase
          ? (
            <>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ my: 2, color: 'white', display: 'block' }}
                // onMouseEnter={() => {
                //   console.log('mouseEnter')
                //
                //   return setIsOpenMenu(true)
                // }}
                // onMouseLeave={() => {
                //   console.log('mouseLeave')
                //
                //   return setIsOpenMenu(false)
                // }}
              >
                {page.name.toUpperCase()}
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                // open={isOpenMenu}
                onClose={handleClose}
                MenuListProps={{ 'aria-labelledby': 'basic-button' }}
                className="hover:text-orange-600"
              >
                { page.subPagesDatabase.map((sp: string) => {
                  const a = 1
                  // console.log('path', `${page.name}/${sp}`)

                  return (
                    <MenuItem
                      key={uniqueId()}
                      onClick={handleClose}
                      sx={{ fontSize: 14 }}
                    >
                      <NavLink
                        to={`${page.name}/${sp}`}
                        style={{ color: 'grey', textDecoration: 'none' }}
                      >
                        {sp.toUpperCase()}
                      </NavLink>
                    </MenuItem>
                  )
                })}
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
