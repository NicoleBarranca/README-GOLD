// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = [
    //validate
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (Required)'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like?',
        // add more choices
        choices: ['MIT', 'BSD_3--Clause', 'Apache_2.0']

    },
    {
        type: 'list',
        name: 'color',
        message: 'Which color would you like for this badge?',
        // add more choices
        choices: ['brightgreen', 'blueviolet', 'orange', 'yellow', 'yellowgreen']

    },
    // would you like another badge (y/n) - if yes then chose both questions again, another? on repeat until no

    //validate
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username? (Required)'
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please describe this project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please explain how to install this application.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please explain the usage of this application.'
    },
    {
        type: 'list',
        name: 'builtWith',
        message: 'Please choose the tools used to build this application.',
        choices: ['JavaScript', 'Node.js', 'HTML', 'CSS', 'Other']
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who are the contributors who participated in this project? '
    },

    {
        type: 'input',
        name: 'profile',
        message: 'What is the link to your GitHub profile?'
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },


    //   {
    //     type: 'list',
    //     name: 'bananana',
    //     message: 'Which license would you like?',
    //     // add more choices
    //     choices: ['MIT']

    // },    {
    //     type: 'list',
    //     name: 'pizza',
    //     message: 'Which license would you like?',
    //     // add more choices
    //     choices: ['MIT']

    // },
];

// // TODO: Create a function to write README file
// function writeToFile("fileName", data) {}

//function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((inquirerResponse, data) => {
            console.log(inquirerResponse);
            fs.writeFile("README.MD", generateMarkdown(inquirerResponse), function (err) {
                if (err) console.log(err)
            })
        })
        .catch((err) => {
            console.log(err);
        })
}
// Function call to initialize app
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