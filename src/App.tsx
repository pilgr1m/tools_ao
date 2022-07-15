import React from 'react'
import './App.css'
import { Table } from './components/Table'
import { Header } from './components/Header'
import { SidebarMenu } from './components/SidebarMenu'
import { Calculation } from './components/Calculation'

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
