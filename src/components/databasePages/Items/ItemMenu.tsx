import React, { FC, useState } from 'react'

import Box from '@mui/material/Box'
import { createTheme, styled, ThemeProvider } from '@mui/material/styles'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Paper from '@mui/material/Paper'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import People from '@mui/icons-material/People'
import PermMedia from '@mui/icons-material/PermMedia'
import Dns from '@mui/icons-material/Dns'
import Public from '@mui/icons-material/Public'
import { subPagesItemsType } from '../../../types'
import { generateCapitalizeLabel } from '../../../utils'

const data = [
  { icon: <People />, label: 'Authentication' },
  { icon: <Dns />, label: 'Database' },
  { icon: <PermMedia />, label: 'Storage' },
  { icon: <Public />, label: 'Hosting' },
]

const FireNav = styled(List)<{ component?: React.ElementType }>({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 0,
  },
  '& .MuiSvgIcon-root': { fontSize: 20 },
})

type PropsType = {
  item: subPagesItemsType
}

export const ItemMenu: FC<PropsType> = ({ item }) => {
  const [open, setOpen] = useState(false)

  return (
    <Box sx={{ display: 'flex' }}>
      <ThemeProvider
        theme={createTheme({
          components: { MuiListItemButton: { defaultProps: { disableTouchRipple: true } } },
          palette: {
            mode: 'dark',
            primary: { main: 'rgb(102, 157, 246)' },
            background: { paper: 'rgb(5, 30, 52)' },
          },
        })}
      >
        <Paper elevation={0} sx={{ minWidth: 170 }} square>
          <FireNav component="nav" disablePadding>
            <Box
              sx={{
                bgcolor: open ? 'rgba(71, 98, 130, 0.2)' : null,
                pb: open ? 2 : 0,
              }}
            >
              <ListItemButton
                alignItems="flex-start"
                onClick={() => setOpen(!open)}
                sx={{ '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } } }}
              >
                { item.subPages && (
                  <>
                    <ListItemText
                      primary={generateCapitalizeLabel(item.name)}
                      primaryTypographyProps={{
                        fontSize: 15,
                        fontWeight: 'medium',
                        lineHeight: '20px',
                        mb: '0px',
                      }}
                      secondary={generateCapitalizeLabel(item.subPages.join(', '))}
                      secondaryTypographyProps={{
                        noWrap: true,
                        fontSize: 12,
                        lineHeight: '16px',
                        color: open ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                      }}
                      sx={{ my: 0 }}
                    />
                    <KeyboardArrowDown
                      sx={{
                        mr: -1,
                        opacity: 0,
                        transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                        transition: '0.2s',
                      }}
                    />
                  </>
                )}
              </ListItemButton>

              {/* subItems */}
              {open && item.subPages &&
                item.subPages.map((item) => (
                  <ListItemButton
                    key={item}
                    sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                  >
                    <ListItemText
                      primary={generateCapitalizeLabel(item)}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))}
            </Box>
          </FireNav>
        </Paper>
      </ThemeProvider>
    </Box>
  )
}
