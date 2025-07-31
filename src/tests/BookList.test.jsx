import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BookList from "../components/BookList";
import fantasy from "../data/fantasy.json";

describe("BookList", () => {
  it("renders as many SingleBook cards as there are books in the JSON", () => {
    render(<BookList books={fantasy} />);

    const cards = screen.getAllByTestId("book-card");
    expect(cards.length).toBe(fantasy.length);
  });
});
