import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button, Col, Container, Image, Row } from "react-bootstrap";

import noCover from "../../assets/no_cover_thumb.gif";
import { useAppSelector } from "common/hooks/useAppSelector";
import { getBooksData } from "components/BooksList/BooksSelector";
import { BooksType } from "components/BooksList/BooksSchema";

export const DetailsBookPage = () => {
  const { books } = useAppSelector<BooksType>(getBooksData);
  console.log(books);
  const navigate = useNavigate();

  let { id } = useParams();

  //This effect is intended to redirect to the home page after reloading the details book page
  useEffect(() => {
    if (books?.length === 0) {
      navigate("/", { replace: true });
    }
  }, [books, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentBook = books.find((e) => e.id === id);

  const authors = currentBook?.volumeInfo.authors?.join(", ");
  const img = currentBook?.volumeInfo.imageLinks?.thumbnail;
  const title = currentBook?.volumeInfo.title;
  const categories = currentBook?.volumeInfo.categories;
  const description = currentBook?.volumeInfo.description;

  const handleOnClick = () => {
    navigate("/books/list");
  };

  return (
    <Container>
      <Row xs={1} md={2} className="mt-5">
        <Col className="p-3 d-flex justify-content-center img-container">
          <Image className="shadow" src={img || noCover} />
        </Col>
        <Col className="pt-2 px-5">
          <div className="fw-light mb-3">{categories}</div>
          <h3 className="mb-2">{title}</h3>
          <div className="fw-lighter text-decoration-underline mb-2">
            {authors}
          </div>
          <p className={`fw-light ${description && "border"} rounded p-2`}>
            {description}
          </p>
        </Col>
      </Row>
      <div className="text-center">
        <Button
          onClick={handleOnClick}
          className="px-3 mt-5 mb-5"
          variant="secondary"
        >
          Back
        </Button>
      </div>
    </Container>
  );
};
