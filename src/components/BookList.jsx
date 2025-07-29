import SingleBook from "./SingleBook";
import { Col, Container, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";
import { useState } from "react";

const BookList = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [asin, setAsin] = useState("");

  const ChangeAsin = (NewAsin) => {
    setAsin(NewAsin);
  };

  return (
    <>
      <Container>
        <Row className=" mt-5 justify-content-start">
          <Col xs={7} md={7} className="text-start ">
            <Form.Group className="mb-3">
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Form.Group>

            {props.books
              .filter((b) => b.title.toLowerCase().includes(searchQuery))
              .map((b) => (
                <SingleBook
                  key={b.asin}
                  book={b}
                  selectedAsin={asin}
                  ChangeAsin={ChangeAsin}
                />
              ))}
          </Col>

          <Col xs={5} md={5}>
            <CommentArea asin={asin} />{" "}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BookList;
