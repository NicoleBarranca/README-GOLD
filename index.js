// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');



// Array of questions for user input
const questions = [
    //validate
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('You must enter your project name!');
              return false;
            }
          }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like?',
        choices: ['MIT', 'BSD_3--Clause', 'Apache_2.0'],

    },
    {
        type: 'list',
        name: 'color',
        message: 'Which color would you like for this badge?',
        choices: ['brightgreen', 'blueviolet', 'orange', 'yellow', 'yellowgreen']

    },

    {
        type: 'confirm',
        name: 'addBadge',
        message: 'Would you like to add another badge?',
        default: true
        
    },
    {
        type: 'list',
        name: 'licenseTwo',
        message: 'Which license would you like?',
        choices: ['MIT', 'BSD_3--Clause', 'Apache_2.0'],
        when: ({ addBadge }) => addBadge
    },

    {
        type: 'list',
        name: 'colorTwo',
        message: 'Which color would you like for this badge?',
        choices: ['brightgreen', 'blueviolet', 'orange', 'yellow', 'yellowgreen'],
        when: ({ licenseTwo }) => licenseTwo
    },
    {
        type: 'confirm',
        name: 'addAnotherBadge',
        message: 'Would you like to add another badge?',
        default: true
    },
    {
        type: 'list',
        name: 'licenseThree',
        message: 'Which license would you like?',
        choices: ['MIT', 'BSD_3--Clause', 'Apache_2.0'],
        when: ({ addAnotherBadge }) => addAnotherBadge
    },

    {
        type: 'list',
        name: 'colorThree',
        message: 'Which color would you like for this badge?',
        choices: ['brightgreen', 'blueviolet', 'orange', 'yellow', 'yellowgreen'],
        when: ({ licenseThree }) => licenseThree
    },

    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username? (Required)',
        validate: usernameInput => {
            if (usernameInput) {
              return true;
            } else {
              console.log('You must enter your GitHub username!');
              return false;
            }
          }
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
        type: 'checkbox',
        name: 'builtWith',
        message: 'Please choose the tools used to build this application.',
        choices: ['JavaScript', 'Node.js', 'HTML', 'CSS', 'Other']
    },

    {
        type: 'input',
        name: 'tests',
        message: 'What tests were used?'
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