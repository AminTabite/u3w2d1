import { Card } from "react-bootstrap";

const SingleBook = ({ book, selectedAsin, ChangeAsin }) => {
  return (
    <Card
      data-testid="book-card"
      onClick={() => ChangeAsin(book.asin)}
      style={{
        border: selectedAsin === book.asin ? "3px solid red" : "none",
      }}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title style={{ color: "black" }}>{book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
