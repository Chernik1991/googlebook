import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { SearchType } from 'components/SerchTermForm/SearchSchema'

export const searchSlice = createSlice({
  name: 'search',
  initialState: {} as SearchType,
  reducers: {
    setSearch: (state, action: PayloadAction<{ values: SearchType }>) => {
      state.searchTerm = action.payload.values.searchTerm
      state.page = action.payload.values.page
      state.sort = action.payload.values.sort
      state.category = action.payload.values.category
    },
  },
})

export const { setSearch } = searchSlice.actions
export const { reducer: searchReducer } = searchSlice
