import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './Layout'
import { routes } from './data'
// import { ROUTES } from 'consts'

export const NavigationRouting = () => (
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
