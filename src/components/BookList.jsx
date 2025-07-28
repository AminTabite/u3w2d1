import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Container, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    searchQuery: "",
    asin: "",
    selected: "",
  };

  ChangeAsin = (NewAsin) => {
    this.setState({
      asin: NewAsin,
    });
  };

  render() {
    return (
      <>
        <Container>
          <Row className=" mt-5 justify-content-start">
            <Col xs={7} md={7} className="text-start ">
              <Form.Group className="mb-3">
                <Form.Control
                  type="search"
                  placeholder="Cerca un libro"
                  value={this.state.searchQuery}
                  onChange={(e) =>
                    this.setState({ searchQuery: e.target.value })
                  }
                />
              </Form.Group>

              {this.props.books
                .filter((b) =>
                  b.title.toLowerCase().includes(this.state.searchQuery)
                )
                .map((b) => (
                  <Col xs={7} md={7} key={b.asin}>
                    <SingleBook
                      book={b}
                      selectedAsin={this.state.asin}
                      ChangeAsin={this.ChangeAsin}
                    />
                  </Col>
                ))}
            </Col>

            <Col xs={5}>
              <CommentArea asin={this.state.asin} />{" "}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default BookList;
