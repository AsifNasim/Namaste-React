import React from "react";
import ReactDom from "react-dom/client"
import Headers from "./components/Headers";
import Body from "./components/Body";
import Search from "./components/Search";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Cart from "./components/Cart";
import Error from "./components/Error";
import Signin from "./components/Signin";
import Help from "./components/Help";
import Offers from "./components/Offers";
import RestaurantsMenu from "./components/RestaurantsMenu";
import User from "./components/User";
import About from "./components/About"

const App = () => {
    return (
        <div className="main-body">
            <h1>
                <Headers />
                {/* <Search /> */}
                
                <Outlet />
            </h1>
        </div>
    )
    
}


const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/signin',
                element: <Signin />
            },
            {
                path: '/help',
                element: <Help />
            },
            {
                path: '/offers',
                element: <Offers />
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantsMenu />
            },
            {
                path: '/about',
                element: <About />,
            }

        ],

        errorElement: <Error />
    }
])

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

