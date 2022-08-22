import React from 'react'
// import { Sidebar, Topbar } from 'components'
import { useLocation } from 'react-router-dom'
import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'
import { Header } from './components'
// import { ERROR, FORGOT_PASSWORD_PATH, LOGIN_PATH, NEW_PASSWORD_PATH, RESET_PASSWORD_PATH } from 'consts'

// const pathsForPagesWithshowToolbarsoutBars = [
//   LOGIN_PATH,
//   FORGOT_PASSWORD_PATH,
//   RESET_PASSWORD_PATH,
//   NEW_PASSWORD_PATH,
//   ERROR,
// ]

export const Layout: React.FC<any> = ({ children }) => {
  // use location for logging user
  const location = useLocation()
  const isShowSidebarTopbar = true

  return (
    <>
      {/* { pathsForPagesWithoutBars.every(path => path !== location.pathname) && isShow */}
      { isShowSidebarTopbar
        ? (
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>

              {/* Header */}
              <Grid xs={12}>
                <Header />
              </Grid>
              {/* Content */}
              <Grid xs={12} sx={{ p: 5 }}>
                {children}
              </Grid>

            </Grid>
          </Box>
        )
        : <> {children} </> }
    </>
  )
}
