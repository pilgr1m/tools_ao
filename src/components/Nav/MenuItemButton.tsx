import React, { FC } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import HelpIcon from '@mui/icons-material/Help'
import CalculateIcon from '@mui/icons-material/Calculate'

type Props = {
  text: string,
  open: boolean,
  path: string,
}

export const MenuItemButton: FC<Props> = ({
  text,
  open,
  path,
}) => {
  const location = useLocation()
  const color = path === location.pathname ? 'lightgrey' : ''

  return (
    <ListItem
      disablePadding
      sx={{ display: 'block', backgroundColor: color }}
    >
      <NavLink
        to={path}
        style={{ color: 'grey', textDecoration: 'none' }}
      >
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            {text === 'MenuItemButton' ? <HelpIcon /> : <CalculateIcon />}
          </ListItemIcon>
          <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </NavLink>
    </ListItem>
  )
}
