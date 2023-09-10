import React from "react";
import "App.css";
import { Header } from "components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "components/HomePage/HomePage";
import { BooksList } from "components/BooksList/BooksList";
import { DetailsBookPage } from "components/DetailsBookPage/DetailsBookPage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="books/list" element={<BooksList />} />
        <Route path="books/:id" element={<DetailsBookPage />} />
      </Routes>
    </>
  );
};

export default App;
