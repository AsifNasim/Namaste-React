import React from 'react';
import ReactDOM from 'react-dom';

const heading = React.createElement('h1', {
    id:"heading",
    xyz: "abc"
}, "Hello World!");

console.log(heading);
// it return an object

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);
// console.log(root.render(heading));

// react.render convert the React object according the 
// browser DOM and render it on the screen


// props are children + attribute that we passed in


// when face issues with parcel execution then 
// remove its cache using rm -rf .cache dist node_modules



{/* <div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div> */}

const parent = React.createElement('div', {id : "parent"}, 
    [
        React.createElement('div', {id : "child1"},[
            React.createElement('h1', {}, "Hello World! meow meow"),
            React.createElement('h2', {}, "Hello World! meow meow")
        ]
        ),

        React.createElement('div', {id : "child2"},[
            React.createElement('h1', {}, "Hello World! meow meow"),
            React.createElement('h2', {}, "Hello World! meow meow")
        ]  
        )
    ]
    
);

// React.createElement is a function that takes 3 arguments
// and the third argument is the children that you wanted to pass in


const domRoot = ReactDOM.createRoot(document.getElementById('root'));

domRoot.render(parent);


// what is the difference between caret and tilde
// transitive dependencies
// when you download a package and the package also has a dependency
// to run, that's why it is called transitive dependenciews
// caret - ^ - it will update the minor and patch version - minor upgrades
// tilde - ~ - it will update the patch version - major upgrades

// package.lock.json has the exact version of the package that you have installed

// browserList

// node modules are collecton of all the packages/dependencies that you have installed
// whatever you can generate, don't put it on the git

// npm -- install the package 
// npx -- run/execute the package

const userData = fetch('https://api.github.com/users/AsifNasim')

userData
.then( resp => {
   return resp.json();
})
.then( data => {
    console.log(data);
})




