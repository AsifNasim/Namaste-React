import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1', 
    { id :"heading"},
    "Salaam World"
);
console.log(heading);
// JSX is equivalent to the above code
// and the above code is equivalent to the below code

// JSX is a syntactic sugar for React.createElement
// JSX is a syntax extension for JavaScript recommended by React 
// JSX code looks a lot like HTML but ultimately gets transpiled to JavaScript
// JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement and/or appendChild methods
// JSX makes the code more readable and less complex
// JSX ultimately transpiles to React.createElement() calls which return plain JavaScript objects called React elements
// JSX is not a necessity, but it makes the code more readable and easier to write
// const JSXheading = <h1 id='heading' className='head'>This is React Rocket 🚀</h1>

const JSXheading = (<h1 
    id='heading' 
    className='head'>
        This is React Rocket 🚀
    </h1>)

// if you are writing JSX code in a multiple line 
// then you have to wrap it in parentheses
// so that Babel could understand where to start and where to end
// and transiple it to React.createElement 

// Both the heading and JSXheading return the same react object

console.log(JSXheading)
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(JSXheading);
// root.render(heading);

// EP04 - Functional Components

const Heading = () => {

    return <h2>This is a functional component</h2>;
}

// if it is a one line code then we don't need to write 
// return keyword and curly braces

// const Heading = () => <h1>This is a functional component</h1>;

// if that one line code is in multiple lines, then we have
// to wrap it in parentheses

// const Title = () => (<h1> This is Title of my webpage </h1> );

const HeadingNow = () => (
    <div id="container">
        {/* < Title /> */}
        {title}
        <h1 
    id = "heading" >This is a functional component</h1>
    <h2>{data.text}</h2>
    <h2>{JSON.stringify(data)}</h2>

    <h3>{sum(1,2)}</h3>
    <h2>{myName}</h2>

    </div>

);
const title =  (
<h1> This is Title of my webpage
    <Heading />
     </h1> 

);


const data = {
    id: "heading",
    text: "This is a functional component"
};

const sum = (a, b) => a + b;

const myName = "Mohammed Asif Nasim"


// putting up component inside another component
// is called component composition


root.render(<Heading />);
root.render(<HeadingNow />);


//React Elements can be used inside React Functional Components and vice versa
