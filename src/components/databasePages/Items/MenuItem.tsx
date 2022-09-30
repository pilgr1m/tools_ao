import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import { createTheme, styled, ThemeProvider } from '@mui/material/styles'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Paper from '@mui/material/Paper'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import { subPagesItemsType } from '../../../types'
import { generateCapitalizeLabel } from '../../../utils'
import { BAG_PATH, ITEMS_PATH } from '../../../consts'
import { NavLink } from 'react-router-dom'

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
  itemMenu: subPagesItemsType
}

export const MenuItem: FC<PropsType> = ({ itemMenu }) => {
  const [open, setOpen] = useState(false)

  // console.log('itemMenu: ', itemMenu)

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
                { itemMenu.subPages && (
                  <>
                    <ListItemText
                      primary={generateCapitalizeLabel(itemMenu.name)}
                      primaryTypographyProps={{
                        fontSize: 15,
                        fontWeight: 'medium',
                        lineHeight: '20px',
                        mb: '0px',
                      }}
                      secondary={generateCapitalizeLabel(itemMenu.subPages.join(', '))}
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
              {open && itemMenu.subPages &&
                itemMenu.subPages.map((item) => {
                  console.log('item: ', itemMenu)
                  console.log('BAG_PATH: ', BAG_PATH)
                  const path = `${ITEMS_PATH}/${itemMenu.name}/${item}`

                  return (
                    <ListItemButton
                      key={item}
                      sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                    >
                      <NavLink to={path}>
                        <ListItemText
                          primary={generateCapitalizeLabel(item)}
                          primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                        />
                      </NavLink>
                    </ListItemButton>
                  )
                })}
            </Box>
          </FireNav>
        </Paper>
      </ThemeProvider>
    </Box>
  )
}
