import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/restaurantBodyData.json";
import Body from "../Body";
import {act} from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn( () => {
    return Promise.resolve( ()=> {
        json : () => {
            Promise.resolve(MOCK_DATA);
        }
    })
})

it('should render the body component with Search', async () => { 

    await act(async () => {
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )
    })

    const searchButton = screen.getByRole("button", {name:"Search"});

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, {target: { value: "burger"}});

    fireEvent.click(searchButton);

    const card = screen.getByTestId('resCard');

    expect(card.length).toBe(1);

 })

 it('should render the top rated restaurant', async () => { 

    await act(async () => {
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )
    })

    const cardsBeforeFilter = screen.getByTestId("rescard");
    expect(cardsBeforeFilter.length).toBe(8)

    const topRatedButton = screen.getByRole("button", {name:"Top Rated Restaurant"});

    fireEvent.click(topRatedButton);

    const cardsAfterFilter = screen.getByTestId('resCard');

    expect(cardsAfterFilter.length).toBe(4);

 })