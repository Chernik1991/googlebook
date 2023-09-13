import { baseAPI } from 'api/baseAPI'
import { BooksType } from 'components/BooksList/BooksSchema'
import { SearchType } from 'components/SerchTermForm/SearchSchema'

export interface StateSchema {
  [baseAPI.reducerPath]: ReturnType<typeof baseAPI.reducer>
  search: SearchType
  books: BooksType
}
