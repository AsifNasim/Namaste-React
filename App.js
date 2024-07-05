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
