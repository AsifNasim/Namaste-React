import React, { lazy, Suspense } from "react";
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
// import About from "./components/About"
import { Provider } from "react-redux";
import appStore from "./config/appStore";

const About = lazy(() => import('./components/About'));

const App = () => {
    return (
        <Provider store={appStore} >
            <div className="main-body">
            <h1>
                <Headers />
                {/* <Search /> */}
                
                <Outlet />
            </h1>
        </div>
        </Provider>
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
                element: <Provider store={appStore}>
                    <Cart />
                </Provider>
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
                element: (
                    <Suspense fallback={<h1>Loading .......</h1>}>
                        <About/>
                    </Suspense>
                ),
            }

        ],

        errorElement: <Error />
    }
])

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

