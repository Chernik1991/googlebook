import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Container } from "react-bootstrap";
import { CardsGrid } from "components/BooksList/CardsGrid/CardsGrid";
import { useAppSelector } from "common/hooks/useAppSelector";
import { SearchType } from "components/SerchTermForm/SearchSchema";
import { getSearchData } from "components/SerchTermForm/SearchSelector";
import { useGetBooksQuery } from "features/service/QueryBooks";
import { Loader } from "components/Loader/Loader";
import { setSearch } from "components/SerchTermForm/SearchSlice";
import { useAppDispatch } from "common/hooks/useAppDispatch";
import { setBooks } from "components/BooksList/BooksSlice";

export const BooksList = () => {
  const { sort, searchTerm, page, category } =
    useAppSelector<SearchType>(getSearchData);
  const nextPage = page! + 1;
  const dispatch = useAppDispatch();
  const possibleCount = nextPage * 30;
  const possibleCountPage = page! * 30;
  const { data, isLoading } = useGetBooksQuery({
    searchTerm,
    sort,
    category,
    page: possibleCountPage,
  });
  const books = data?.items;
  const total = data?.totalItems;
  const navigate = useNavigate();
  //This effect is intended to redirect to the home page after reloadding the page with a list of books
  useEffect(() => {
    if (!isLoading && books?.length === 0) {
      navigate("/", { replace: true });
    }
  }, [books, isLoading, navigate]);
  // if (books) {
  //   dispatch(setBooks({books }));
  // }
  const handleOnClick = () => {
    dispatch(
      setSearch({ values: { searchTerm, sort, category, page: nextPage } }),
    );
  };
  useEffect(() => {
    dispatch(setBooks({ books: books! }));
  }, [books, dispatch]);
  return (
    <Container className="mb-5">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="mt-3 text-center fw-bold">Found {total} result</div>
          {books && <CardsGrid books={books} />}
          <div className="text-center">
            {total! > 0 && (
              <Button
                onClick={handleOnClick}
                disabled={total! <= possibleCount}
                className="px-5 mt-3 mb-5"
                variant="outline-secondary"
              >
                "Load more..."
              </Button>
            )}
          </div>
        </>
      )}
    </Container>
  );
};