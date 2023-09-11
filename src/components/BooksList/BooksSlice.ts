import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { Items } from "features/service/GetItemsShema";
import { BooksType } from "components/BooksList/BooksSchema";

export const booksSlice = createSlice({
  name: "Books",
  initialState: { books: [] } as BooksType,
  reducers: {
    setBooks: (state, action: PayloadAction<{ books: Items[] }>) => {
      state.books = action.payload.books;
    },
    addBooks: (state, action: PayloadAction<{ books: Items[] }>) => {
      state.books = [...state.books, ...action.payload.books];
    },
  },
});

export const { setBooks, addBooks } = booksSlice.actions;
export const { reducer: booksReducer } = booksSlice;
