import React from 'react'
import { CalculationPage, ExamplePage, HomePage, ItemsPage } from '../page'

export const routes = [
  { path: 'calculation', label: 'calculation', component: <CalculationPage /> },
  { path: 'items', label: 'items', component: <ItemsPage /> },
  { path: 'home', label: 'home', component: <HomePage /> },
  { path: '', label: '', component: <HomePage /> },
  { path: 'example_page', label: 'example_page', component: <ExamplePage /> },
]
