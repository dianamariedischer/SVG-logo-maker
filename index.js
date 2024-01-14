// import inquirer
const inquirer = require("inquirer");

// import filesystem to write svg files
const fs = require("fs");

// import shapes
const { Triangle, Square, Circle } = require("./lib/shapes.js")

// Prompts to ask user through inquirer
function init() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "Enter the text for your logo (up to 3 characters)",
            name: "textInput"
        },
        {
            type: "input",
            message: "What color would you like the text to be? (Please enter a color keyword or hexadecimal)",
            name: "textColorInput"
        },
        {
            type: "list",
            message: "Choose a shape you would like your logo to be in",
            name: "shapeInput",
            choices: ["Triangle", "Square", "Circle"]
        },
        {
            type: "input",
            message: "What color would you like the shape to be? (Please enter a color keyword or hexadecimal)",
            name: "shapeColorInput"
        }
    ])
    .then((response) => {
        // restarts the prompts if text length is greater than 3
        if(response.textInput.length > 3) {
            console.log("Please respond to the prompts again and keep your text under 3 characters.");
            init();

        // creates triangle svg, writes it to logo.svg in examples folder, and tells user
        } else if(response.shapeInput == "Triangle") {
            // construct triangle
            let logo = new Triangle(response.textInput, response.textColorInput, response.shapeColorInput);
            // use the svg function that returns svg code as file content
            fs.writeFile("./examples/logo.svg", logo.render(), ()=> console.log('Your logo is in the examples folder!'));
        
        // creates square svg, writes it to logo.svg in examples folder, and tells user
        } else if (response.shapeInput == "Square") {
            // construct square
            let logo = new Square(response.textInput, response.textColorInput, response.shapeColorInput);
            // use the svg function that returns svg code as file content
            fs.writeFile("./examples/logo.svg", logo.render(), ()=> console.log('Your logo is in the examples folder!'));
        
            // creates circle svg, writes it to logo.svg in examples folder, and tells user
        } else if (response.shapeInput == "Circle") {
            // construct circle
            let logo = new Circle(response.textInput, response.textColorInput, response.shapeColorInput);
            // use the svg function that returns svg code as file content
            fs.writeFile("./examples/logo.svg", logo.render(), ()=> console.log('Your logo is in the examples folder!'));
        
        // if none of the above responses went through, there was an issue and the program restarts
        } else {
            console.log("Sorry, there was an issue handling the responses. Restarting the prompts.")
            init();
        }
    })
    // catch errors and log them
    .catch(err => {
        console.log(err);
    })
}

init();