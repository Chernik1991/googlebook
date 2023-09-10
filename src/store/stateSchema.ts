import { baseAPI } from "api/baseAPI";
import { SearchType } from "components/SerchTermForm/SearchSchema";
import { BooksType } from "components/BooksList/BooksSchema";

export interface StateSchema {
  [baseAPI.reducerPath]: ReturnType<typeof baseAPI.reducer>;
  search: SearchType;
  books: BooksType;
}
