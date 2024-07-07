import React from 'react';
import ReactDOM from 'react-dom/client';

// Create a Nested header Element using React.createElement(h1,h2,h3 inside a
// div with class “title”)


const heading = React.createElement('h1',
    { id: 'heading' },[
    React.createElement('h2', {}, "This is h2"),
    React.createElement('h3', {}, 'This is a functional component')
    ]);

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);

// Create the same element using JSX

const JSXheading  = (
    <div className="title">
        <h1>This is heading one</h1>
        <h2>This is heading two</h2>
        <h3>This is heading three</h3>
    </div>
);

// root.render(JSXheading);

const h2Heading = <h2>This is heading two</h2>;
const h3Heading = <h3>This is heading three</h3>;

const nestedJSXheading  = (
    <div className="title">
        <h1>This is heading one
            
        </h1>
        {h2Heading}   
        {h3Heading} 
          
    </div>
);

// root.render(nestedJSXheading);


// ○ Create a functional component of the same with JSX
// Pass attributes into the tag in JSX

const Title = () => (
    <div className='title' id='newId'>
        <h1>This is heading one</h1>
        <h2>This is heading two</h2>
        <h3>This is heading three</h3>
    </div>
)

root.render(<Title />);


// ○ Composition of Component(Add a component inside another)

const AnotherTitle = () => (
    <div className='title' id='newId'>
        <Title />
        <h4>This is heading four</h4>
    </div>

)

root.render(<AnotherTitle />);

// ○ Pass a prop to the functional component and display it in the component

const TitleWithProps = (props) => (
    <div className='title' id='newId'>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        <h3>{props.subheading}</h3>
    </div>
)

root.render(<TitleWithProps title='This is heading one' subtitle='This is heading two' subheading='This is heading three' />);

