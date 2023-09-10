import React from "react";
import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { SearchTermForm } from "components/SerchTermForm/SearchTermForm";

export const Header = () => {
  return (
    <Container fluid className="header shadow-lg">
      <Row>
        <Link to={"/"} className="text-decoration-none text-reset">
          <h1 className="text-center text-white fw-bold mt-3">
            Search For Books
          </h1>
        </Link>
      </Row>
      <SearchTermForm />
    </Container>
  );
};
