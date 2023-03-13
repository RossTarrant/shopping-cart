import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Cart from "../Cart";

describe("Cart component", () => {

    const basket = [{
        id: 123,
        title: "Steve Madden",
        description: "A trainer from the astounding and incredible, Steve Madden!",
        price: 179,
        quantity: 2,
        imgUrl: "http://cdn.shopify.com/s/files/1/0083/3903/0082/products/POSS03S1_BLACKTAN_1_grande.jpg?v=1654077320",
    },
    {
        id: 456,
        title: "Match-E-Trainer",
        description: "It's pretty much just a brown shoe, nothing special!",
        price: 39,
        quantity: 1,
        imgUrl: "http://cdn.shopify.com/s/files/1/0083/3903/0082/products/SM19000020-04004-748_02_grande.jpg?v=1663106690",
    }]

    it("renders Cart", () => {
        const { container } = render(
            <BrowserRouter>
                <Cart basket={basket}/>
            </BrowserRouter>
        );
        expect(container).toMatchSnapshot();
    });

    it("calculates correct basket total", () => {
        render(
            <BrowserRouter>
                <Cart basket={basket}/>
            </BrowserRouter>
        );
        expect(screen.getByText("Your total is £397.00")).toBeTruthy();
    });

    it("updates basket total when deleting item from basket", () => {
        const onClickRemoveItem = jest.fn();
        render(
            <BrowserRouter>
                <Cart basket={basket} removeFromBasket={onClickRemoveItem}/>
            </BrowserRouter>
        );
        const button = screen.getAllByRole("button", { name: "Delete" })[0];
        userEvent.click(button);
        expect(onClickRemoveItem).toHaveBeenCalledTimes(1);
    });

});