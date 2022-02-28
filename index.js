// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


//example of promises

const inquirer = require("inquirer");

function promptUser() {
    return inquirer.prompt(questions[{
        name: "fistname",
        type: "input",
        message: "Enter first name",
        validate(input,) {
            if(input.matches(/\.js/)){
                return "invalid anem";
            }
            return true;
        }
    }
])
}

promptUser()
.then((response) => {
    console.log(response);
})
.catch((err) =>{
    console.log(err.message);
    process.exit();
});