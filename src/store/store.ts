import { configureStore } from '@reduxjs/toolkit'
import { itemsSlice } from '../features'

export const store = configureStore(
  { reducer: { items: itemsSlice.reducer } },
)
