import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { ROUTES } from 'consts'
import { Layout } from './Layout'
import { CalculationPage, ExamplePage, HomePage, ItemsPage } from './page'

export const NavigationRouting = () => {
  const routes = [
    { path: 'calculation', label: 'calculation', component: <CalculationPage /> },
    { path: 'database', label: 'database', component: <ItemsPage /> },
    { path: 'home', label: 'home', component: <HomePage /> },
    { path: '', label: '', component: <HomePage /> },
    { path: 'example_page', label: 'example_page', component: <ExamplePage /> },
  ]

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.label}
              path={route.path}
              element={route.component}
            />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
