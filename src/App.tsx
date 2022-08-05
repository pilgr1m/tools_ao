import React from 'react'
import './App.css'
import {
  SidebarMenu,
  SimpleFormCalculation,
} from './components'
import { Container } from '@mui/material'

export const App = () => {
  const a = 1

  return (
    <>
      <Container>
        <SidebarMenu />
      </Container>

      <Container>
        <SimpleFormCalculation />
      </Container>
    </>
  )
}
