import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { Items } from "features/service/GetItemsShema";
import { BooksType } from "components/BooksList/BooksSchema";

export const booksSlice = createSlice({
  name: "Books",
  initialState: {} as BooksType,
  reducers: {
    setBooks: (state, action: PayloadAction<{ books: Items[] }>) => {
      state.books = action.payload.books;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBooks } = booksSlice.actions;

export const { reducer: booksReducer } = booksSlice;
