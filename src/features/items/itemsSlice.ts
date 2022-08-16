import { createSlice } from '@reduxjs/toolkit'

/* eslint-disable no-param-reassign */
export const itemsSlice = createSlice(
  {
    name: 'items',
    initialState: null,
    reducers: {
      setFarmableItemsTEST: (state, action) => {
        console.log('_____action.payload: ', action.payload)
        console.log('_____action.type: ', action.type)
        state = action.payload
        console.log('state: ', state)
      },
      // eslint-disable-next-line no-return-assign
      setFarmableItems: (state, action) => state = action.payload,
    },
  },
)

export const itemsSelector = { getItems: (state:any) => state.items }

export const { setFarmableItems } = itemsSlice.actions
