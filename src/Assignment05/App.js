import React from "react";
import ReactDOM from "react-dom/client";
import Headers from "../Assignment05/components/Header";
import Body from "../Assignment05/components/Body";

const App = () => {
    return (
        <div>
            <Headers />
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( <App />);