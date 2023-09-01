// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How does it install?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is it used for? how is it used?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license. If no license exists, hit enter',
        choices: ['MIT', 'ODC_BY', 'Zlib']
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'List any existing contributors or guidlines for future contributions',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How is the project tested? list any test scripts/API used',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Github username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'List an email you would like to be reached from'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   return fs.writeFile(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("writiing file...");
        writeToFile('./README.md', generateMarkdown({responses}), err => {
            err ? console.error(err) : console.log('Readme created')})
    });
}

// Function call to initialize app
init();
//Bree helped me a lot with this