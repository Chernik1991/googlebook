import React from "react";
import "App.css";
import { Header } from "components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "components/HomePage/HomePage";
import { BooksList } from "components/BooksList/BooksList";
import { DetailsBookPage } from "components/DetailsBookPage/DetailsBookPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="books/list" element={<BooksList />} />
        <Route path="books/:id" element={<DetailsBookPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
};
