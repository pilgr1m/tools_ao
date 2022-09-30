import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { instance } from '../../services'
import { bagsURL } from '../../consts'
import { sortedItemsByTierAndGrade } from '../../utils'

const initialState = {
  items: [],
  isLoading: false,
  isError: false,
}

export const getBags = createAsyncThunk(
  'items/getItems',
  // first arg (payload) if don't need it => "_"
  async (url: string) => {
    const response = await instance.get(url)

    const data = await response.data

    const sortedData = sortedItemsByTierAndGrade(data)

    return sortedData
  },
)

/* eslint-disable no-param-reassign */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const itemsSlice = createSlice(
  {
    name: 'items',
    initialState,
    reducers: {
      setBags: (state, action) => {
        state.items = action.payload
        console.log('state: ', state)
      },
    },
    extraReducers: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      [getBags.pending]: (state) => {
        console.log('pending')
        state.isLoading = true
        state.isError = false
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      [getBags.fulfilled]: (state, action) => {
        console.log('fulfilled')
        state.isLoading = false
        state.items = action.payload
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      [getBags.rejected]: (state) => {
        console.log('rejected')
        state.isLoading = false
        state.isError = true
      },
    },
  },
)

export const { setBags } = itemsSlice.actions
