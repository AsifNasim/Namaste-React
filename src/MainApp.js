import React from 'react';
import ReactDOM from 'react-dom/client';
import Headers from "./components/Headers";
import Body from "./components/Body";

const MainApp = () => (
    <div className='title'> 
        <Headers />
        <Body />
        {/* <Footers /> */}
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( <MainApp />);