import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SidebarMenu } from './components'
import { Container } from '@mui/material'
import {
  CalculationPage,
  ExamplePage,
  HomePage,
  ItemsPage,
} from './page'

export const App = () => {
  const a = 1

  return (
    <>
      <BrowserRouter>
        <Container>
          <SidebarMenu />
        </Container>

        <Container className="mt-4">
          <Routes>
            <Route path="/calculation" element={<CalculationPage />} />
            <Route path="/items" element={<ItemsPage />} />
            <Route path="/menu-item2" element={<ExamplePage />} />
            <Route path="/menu-item3" element={<ExamplePage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>

        </Container>

      </BrowserRouter>
    </>
  )
}
