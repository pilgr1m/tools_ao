import React from 'react'
import './App.css'
import { Calculation, Header, SidebarMenu } from './components'

export const App = () => {
  const a = 1

  return (
    <div className="App">
      <Header />
      <SidebarMenu />
      <Calculation />
    </div>
  )
}
