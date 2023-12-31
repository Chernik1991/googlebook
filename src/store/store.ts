import {
  configureStore,
  isRejectedWithValue,
  Middleware,
  MiddlewareAPI,
  ReducersMapObject,
} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { toast } from 'react-toastify'

import { StateSchema } from './stateSchema'

import { baseAPI } from 'api/baseAPI'
import { booksReducer } from 'components/BooksList/BooksSlice'
import { searchReducer } from 'components/SerchTermForm/SearchSlice'

const rootReducer: ReducersMapObject<StateSchema> = {
  [baseAPI.reducerPath]: baseAPI.reducer,
  search: searchReducer,
  books: booksReducer,
}

export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => next => action => {
  let currentError: string

  if (isRejectedWithValue(action)) {
    if (action.payload.data?.error?.message?.length) {
      currentError = action.payload.data.error?.message
    } else {
      currentError = 'some error'
    }

    toast.error(currentError, {
      position: 'top-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    })
  }

  return next(action)
}
export const store = configureStore({
  reducer: rootReducer,
  middleware: gDM => gDM().concat([baseAPI.middleware, rtkQueryErrorLogger]),
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
