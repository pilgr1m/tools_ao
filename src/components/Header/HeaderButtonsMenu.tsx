import React, { FC } from 'react'
import { HeaderMenuMobileView } from './HeaderMenuMobileView'
import { HeaderMenuDesktopView } from './HeaderMenuDesktopView'
import { pages } from '../../data'

type Props = {

}

export const HeaderButtonsMenu: FC<Props> = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <>
      {/* mobile view menu */}
      <HeaderMenuMobileView
        pages={pages}
        anchorElNav={anchorElNav}
        handleOpenNavMenu={handleOpenNavMenu}
        handleCloseNavMenu={handleCloseNavMenu}
      />

      {/* desktop view menu */}
      <HeaderMenuDesktopView
        pages={pages}
        handleCloseNavMenu={handleCloseNavMenu}
      />
    </>
  )
}
