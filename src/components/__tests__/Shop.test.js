import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import {items} from "../data"
import Shop from "../Shop.js";

describe("Shop component", () => {

    it("renders one card for each shop item from data", () => {
        render(
            <BrowserRouter>
                <Shop />
            </BrowserRouter>
        );
        const cards = screen.getAllByTestId("shop-card");
        expect(cards.length).toEqual(items.length);
    });

});