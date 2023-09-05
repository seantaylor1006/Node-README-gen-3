// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const path = require('path');
//node variable that sends the questions to the generateMarkdown file
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
        message: 'Select a license.',
        choices: ['MIT', 'apache-2-0', 'jam']
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
   return fs.writeFileSync(path.join(process.cwd(), fileName), data);
   //writeFileSync prevents file changes until after the inquirer prompts are done. writeFile by itself would create an error
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("writiing file...");
        writeToFile('./README.md', generateMarkdown({ ...responses}), err => {
        //spread operator in responses allows for the array of questions to be unpacked and
        //accepted in the function. Otherwise, the created README file will return undefined data.
            err ? console.error(err) : console.log('Readme created')})
    });
}

// Function call to initialize app
init();
//Bree helped me a lot with this