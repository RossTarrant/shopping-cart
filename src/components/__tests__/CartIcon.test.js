import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CartIcon from "../CartIcon";

describe("Cart Icon component", () => {

    it("renders Cart Icon", () => {
        const { container } = render(
            <BrowserRouter>
                <CartIcon basketQuantity={6}/>
            </BrowserRouter>
        );
        expect(container).toMatchSnapshot();
    });

    it("renders cart icon with correct basket badge when quantity is 3", () => {
        render(
            <BrowserRouter>
                <CartIcon basketQuantity={3}/>
            </BrowserRouter>
        );
        expect(screen.getByTestId("basket").textContent).toBe("3");
    })

    it("renders cart icon with correct basket badge when quantity is 12", () => {
        render(
            <BrowserRouter>
                <CartIcon basketQuantity={12}/>
            </BrowserRouter>
        );
        expect(screen.getByTestId("basket").textContent).toBe("12");
    })

});