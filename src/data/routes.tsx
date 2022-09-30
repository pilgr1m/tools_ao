import React from 'react'
import { CalculationPage, ExamplePage, HomePage, ItemsPage, Page404 } from '../pages'
import {
  ANIMAL_PATH,
  BAG_PATH,
  CALCULATION_PATH,
  CAPE_PATH,
  CLOTH_ARMOR_PATH,
  CLOTH_HELMET_PATH,
  CLOTH_SHOES_PATH,
  EXAMPLE_PAGE_PATH,
  HOME_PATH,
  ITEMS_PATH,
  LEATHER_ARMOR_PATH,
  LEATHER_HELMET_PATH,
  LEATHER_SHOES_PATH,
  PLATE_ARMOR_PATH,
  PLATE_HELMET_PATH,
  PLATE_SHOES_PATH,
  SEED_PATH,
  UNIQUE_ARMOR_PATH,
  UNIQUE_HELMET_PATH,
  UNIQUE_SHOES_PATH,
  bagsURL,
  capesURL,
} from '../consts'

// TODO add 404 page-rout
export const routes = [
  { path: CALCULATION_PATH, label: 'calculation', component: <CalculationPage /> },
  { path: ITEMS_PATH, label: 'items', component: <ItemsPage /> },
  { path: HOME_PATH, label: 'home', component: <HomePage /> },
  { path: '/', label: '', component: <HomePage /> },
  { path: '*', label: '', component: <Page404 /> },
  { path: EXAMPLE_PAGE_PATH, label: 'example_page', component: <ExamplePage /> },
  { path: BAG_PATH, label: 'bags', component: <ExamplePage url={bagsURL} /> },
]

// Armors items need added good url, now it's moc-url
export const routesDatabaseItems = [
  // accessories
  { path: BAG_PATH, label: 'bags', component: <ExamplePage url={bagsURL} /> },
  { path: CAPE_PATH, label: 'capes', component: <ExamplePage url={capesURL} /> },
  // armor
  { path: CLOTH_ARMOR_PATH, label: 'cloth_armor', component: <ExamplePage url="cloth_armor" /> },
  { path: CLOTH_HELMET_PATH, label: 'cloth_helmet', component: <ExamplePage url="cloth_helmet" /> },
  { path: CLOTH_SHOES_PATH, label: 'cloth_shoes', component: <ExamplePage url="cloth_shoes" /> },

  { path: LEATHER_ARMOR_PATH, label: 'leather_armor', component: <ExamplePage url="leather_armor" /> },
  { path: LEATHER_HELMET_PATH, label: 'leather_helmet', component: <ExamplePage url="leather_helmet" /> },
  { path: LEATHER_SHOES_PATH, label: 'leather_shoes', component: <ExamplePage url="leather_shoes" /> },

  { path: PLATE_ARMOR_PATH, label: 'plate_armor', component: <ExamplePage url="plate_armor" /> },
  { path: PLATE_HELMET_PATH, label: 'plate_helmet', component: <ExamplePage url="plate_helmet" /> },
  { path: PLATE_SHOES_PATH, label: 'plate_shoes', component: <ExamplePage url="plate_shoes" /> },

  { path: UNIQUE_ARMOR_PATH, label: 'unique_armor', component: <ExamplePage url="unique_armor" /> },
  { path: UNIQUE_HELMET_PATH, label: 'unique_helmet', component: <ExamplePage url="unique_helmet" /> },
  { path: UNIQUE_SHOES_PATH, label: 'unique_shoes', component: <ExamplePage url="unique_shoes" /> },

  // artifact (no PATHs)
  { path: UNIQUE_SHOES_PATH, label: 'artifact', component: <ExamplePage url="artifact" /> },
  // ...

  // farmable
  { path: ANIMAL_PATH, label: 'animals', component: <ExamplePage url="animals" /> },
  { path: SEED_PATH, label: 'seeds', component: <ExamplePage url="seeds" /> },

]
