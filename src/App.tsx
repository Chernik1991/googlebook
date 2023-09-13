import React from 'react'

import 'App.css'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { BooksList } from 'components/BooksList/BooksList'
import { DetailsBookPage } from 'components/DetailsBookPage/DetailsBookPage'
import { Header } from 'components/Header/Header'
// eslint-disable-next-line import/order
import { HomePage } from 'components/HomePage/HomePage'

import 'react-toastify/dist/ReactToastify.css'
import { NotFound } from 'components/notFound/NotFound'

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="books/list" element={<BooksList />} />
        <Route path="books/:id" element={<DetailsBookPage />} />
        <Route path="books/notFound" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  )
}
