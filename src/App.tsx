import React from 'react'
import './App.css'
import {
  Header,
  SidebarMenu,
  SimpleFormCalculation,
} from './components'

export const App = () => {
  const a = 1

  return (
    <div className="App">
      <Header />
      <SidebarMenu />
      <div>
        <SimpleFormCalculation />
      </div>
    </div>
  )
}
