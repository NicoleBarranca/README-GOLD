// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = [ 
    {
    type: 'input',
    name: 'name',
    message: 'What is the name of your project? (Required)'},
    {
        type: 'confirm',
        name: 'badges',
        message: 'Would you like to add a badge?',
        default: false
        // if yes info for badges
    },
    {
        type: 'confirm',
        name: 'badges',
        message: 'Would you like to add a badge?',
        default: false
    }
];




// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

function init() {
    inquirer.prompt(questions)
    .then((inquirerResponse, data) => {
        console.log("Making README");
        fs.writeFileSync("README.MD, inquirerResponse, data");
    })
    .catch((err) => {
        console.log(err);
    })
}

init();
//example of promises

// function promptUser() {
//     return inquirer.prompt(questions[{
//         name: "fistname",
//         type: "input",
//         message: "Enter first name",
//         validate(input,) {
//             if(input.matches(/\.js/)){
//                 return "invalid anem";
//             }
//             return true;
//         }
//     }
// ])
// }

// promptUser()
// .then((response) => {
//     console.log(response);
// })
// .catch((err) =>{
//     console.log(err.message);
//     process.exit();
// });