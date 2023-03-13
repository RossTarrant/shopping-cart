import React from "react";
import { render, screen } from "@testing-library/react";
import Homepage from "../Homepage";

describe("Homepage component", () => {

    render(<Homepage />);

    it("should render four headings", () => {
      const headings = screen.getAllByText("Shoes.")
      expect(headings.length).toBe(4);
    });

    it("renders homepage", () => {
        const { container } = render(<Homepage />);
        expect(container).toMatchSnapshot();
    });

});