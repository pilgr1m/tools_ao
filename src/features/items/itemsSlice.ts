import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { instance } from '../../services'
import { bagsURL } from '../../consts'

const initialState = {
  items: [],
  isLoading: false,
  isError: false,
}

export const getBags = createAsyncThunk(
  'posts/getItems',
  // first arg (payload) if don't need it => "_"
  async () => {
    const response = await instance.get(bagsURL)

    const data = await response.data

    return data
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    // dispatch(setBags(response.data))
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
