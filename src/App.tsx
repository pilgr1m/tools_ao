import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  SidebarMenu,
  SimpleFormCalculation,
} from './components'
import { Container } from '@mui/material'

export const App = () => {
  const a = 1

  return (
    <>
      <BrowserRouter>

        <Container>
          <SidebarMenu />
        </Container>

        <Routes>
          <Route path="/calculation" element={<SimpleFormCalculation />} />
          {/* <Route path="/menu-item3" element={<SimpleFormCalculation />} /> */}
          {/* <Route path="/component" element={<Component />} /> */}
        </Routes>

      </BrowserRouter>
    </>
  )
}
