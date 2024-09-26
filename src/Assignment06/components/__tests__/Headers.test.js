import { fireEvent, render, screen } from "@testing-library/react"
import appStore from "../../config/appStore"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import Headers from "../Headers";
import "@testing-library/jest-dom"

it('should test the login button', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Headers/>
            </Provider>
        </BrowserRouter>
    ) 

    const loginButton = screen.getByText('sign-in');
    expect(loginButton).toBeInTheDocument();

})

it('should render the Header component with cart item 0', () =>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Headers/>
            </Provider>
        </BrowserRouter>
    ) 

    const cartItem = screen.getByText('Cart - (0 items)');
    expect(cartItem).toBeInTheDocument();
})

it('should render the Header component with cart present or not', () =>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Headers/>
            </Provider>
        </BrowserRouter>
    ) 
// we can pass regex in the query as well.
    const cartItem = screen.getByText(/Cart/);
    expect(cartItem).toBeInTheDocument();
})

xit('should change the sign-in button to sign-out', () =>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Headers/>
            </Provider>
        </BrowserRouter>
    ) 
    const signIn = screen.getByRole('button', {name:'sign-in'})
    fireEvent.click(signIn)
    const signOut = screen.getByRole('button', {name:'sign-out'})
    const cartItem = screen.getByText(/Cart/);
    expect(cartItem).toBeInTheDocument();
})

