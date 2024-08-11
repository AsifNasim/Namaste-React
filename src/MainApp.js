import React from 'react';
import ReactDOM from 'react-dom/client';
import Headers from "./components/Headers";
import Body from "./components/Body";
import Error from './components/Error';
import About from './components/About';
import Cart from './components/Cart'
import Services from './components/Services'

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Cart from './components/Cart';
import RestaurantMenu from './components/RestaurantMenu';

const MainApp = () => (
    <div className='title'> 
        <Headers />
        < Outlet />
        {/* <Body /> */}
        {/* <Footers /> */}
    </div>
)

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainApp />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/cart',
                element: < Cart />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/restaurants/:resId',
                element: < RestaurantMenu />
            }

        ],
        errorElement: < Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);