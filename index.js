// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// Array of questions for user input
const questions = [

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
        choices: ['MIT', 'EPL_1.0', 'IPL_1.0', 'ISC', 'MPL_2.0', 'OFL_1.1'],

    },
    {
        type: 'list',
        name: 'color',
        message: 'Which color would you like for this badge?',
        choices: ['brightgreen', 'blueviolet', 'orange', 'yellow', 'yellowgreen']

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

//Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((inquirerResponse, data) => {
            console.log(inquirerResponse);
            // To generate README in output file
            const pathName = path.join(__dirname, "output", "README.MD");
            fs.writeFile(pathName, generateMarkdown(inquirerResponse), function (err) {
                if (err) console.log(err)
            })
        })
        .catch((err) => {
            console.log(err);
        })
}

init();