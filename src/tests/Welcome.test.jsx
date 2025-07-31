import { describe, expect, it } from "vitest";
import Welcome from "../components/Welcome";
import { render, screen } from "@testing-library/react";

describe("testing the correct mounting of Welcome.jsx", () => {
  it("checks if the component h1 is in the DOM", () => {
    render(<Welcome />);

    const maintext = screen.getByText("Benvenuti in EpiBooks!");
    expect(maintext).toBeInTheDocument();
  });
});
