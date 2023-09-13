import React, { useEffect } from 'react'

import { Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { BooksType } from 'components/BooksList/BooksSchema'
import { getBooksData } from 'components/BooksList/BooksSelector'
import { addBooks } from 'components/BooksList/BooksSlice'
import { CardsGrid } from 'components/BooksList/CardsGrid/CardsGrid'
import { Loader } from 'components/Loader/Loader'
import { SearchType } from 'components/SerchTermForm/SearchSchema'
import { getSearchData } from 'components/SerchTermForm/SearchSelector'
import { setSearch } from 'components/SerchTermForm/SearchSlice'
import { useGetBooksQuery } from 'features/service/QueryBooks'

export const BooksList = () => {
  const { sort, searchTerm, page, category } = useAppSelector<SearchType>(getSearchData)
  const nextPage = page! + 1
  const dispatch = useAppDispatch()
  const possibleCount = nextPage * 30
  const possibleCountPage = page! * 30
  const { data, isLoading, isFetching } = useGetBooksQuery({
    searchTerm,
    sort,
    category,
    page: possibleCountPage,
  })
  const total = data?.totalItems
  const navigate = useNavigate()

  if (!isFetching && total === 0) {
    navigate('/')
    dispatch(addBooks({ books: [] }))
  }

  const books = data?.items

  useEffect(() => {
    if (!isLoading && books !== undefined) {
      dispatch(addBooks({ books: books! }))
    }
    if (!isLoading && books === undefined) {
      navigate('/books/notFound', { replace: true })
    }
  }, [books, dispatch, isLoading, navigate])
  const { books: carrentbooks } = useAppSelector<BooksType>(getBooksData)
  const handleOnClick = () => {
    dispatch(setSearch({ values: { searchTerm, sort, category, page: nextPage } }))
  }

  return (
    <Container className="mb-5">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="mt-3 text-center fw-bold">Found {total} result</div>
          {books! && <CardsGrid books={carrentbooks.length === 0 ? books! : carrentbooks} />}
          <div className="text-center">
            {total! > 0 && (
              <Button
                onClick={handleOnClick}
                disabled={total! <= possibleCount}
                className="px-5 mt-3 mb-5"
                variant="outline-secondary"
              >
                Load more...
              </Button>
            )}
          </div>
        </>
      )}
    </Container>
  )
}
