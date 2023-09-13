import React, { useEffect } from 'react'

import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

import noCover from '../../assets/no_cover_thumb.gif'

import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { BooksType } from 'components/BooksList/BooksSchema'
import { getBooksData } from 'components/BooksList/BooksSelector'
import { setBooks } from 'components/BooksList/BooksSlice'
import { SearchType } from 'components/SerchTermForm/SearchSchema'
import { getSearchData } from 'components/SerchTermForm/SearchSelector'
import { setSearch } from 'components/SerchTermForm/SearchSlice'

export const DetailsBookPage = () => {
  const { books } = useAppSelector<BooksType>(getBooksData)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  let { id } = useParams()
  const { sort, searchTerm, category } = useAppSelector<SearchType>(getSearchData)
  const currentBook = books.find(e => e.id === id)
  const authors = currentBook?.volumeInfo.authors?.join(', ')
  const img = currentBook?.volumeInfo.imageLinks?.thumbnail
  const title = currentBook?.volumeInfo.title
  const categories = currentBook?.volumeInfo.categories
  const description = currentBook?.volumeInfo.description
  const handleOnClick = () => {
    dispatch(setSearch({ values: { searchTerm, page: 1, category, sort } }))
    dispatch(setBooks({ books: [] }))
    navigate('/books/list')
  }

  useEffect(() => {
    if (books?.length === 0) {
      navigate('/', { replace: true })
    }
  }, [books, navigate])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Container>
      <Row xs={1} md={2} className="mt-5">
        <Col className="p-3 d-flex justify-content-center img-container">
          <Image className="shadow" src={img || noCover} />
        </Col>
        <Col className="pt-2 px-5">
          <div className="fw-light mb-3">{categories}</div>
          <h3 className="mb-2">{title}</h3>
          <div className="fw-lighter text-decoration-underline mb-2">{authors}</div>
          <p className={`fw-light ${description && 'border'} rounded p-2`}>{description}</p>
        </Col>
      </Row>
      <div className="text-center">
        <Button onClick={handleOnClick} className="px-3 mt-5 mb-5" variant="secondary">
          Back
        </Button>
      </div>
    </Container>
  )
}
