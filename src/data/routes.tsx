import React from 'react'
import { CalculationPage, ExamplePage, HomePage, ItemsPage } from '../pages'
import {
  CALCULATION_PATH,
  EXAMPLE_PAGE_PATH,
  HOME_PATH,
  ITEMS_PATH,
} from '../consts'

export const routes = [
  { path: CALCULATION_PATH, label: 'calculation', component: <CalculationPage /> },
  { path: ITEMS_PATH, label: 'items', component: <ItemsPage /> },
  { path: HOME_PATH, label: 'home', component: <HomePage /> },
  { path: '/', label: '', component: <HomePage /> },
  { path: EXAMPLE_PAGE_PATH, label: 'example_page', component: <ExamplePage /> },
]
