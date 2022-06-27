// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// An array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        default: 'Project Title'
    },
    {
        type: 'input',
        message: 'Please enter in a short description of the project.',
        name: 'challenge',
        default: 'A fun little project to automatically create a README file.'
    },
    {
        type: 'input',
        message: 'Describe the user and what problem this projects solves. What makes your project stand out?',
        name: 'userStory',
        default: 'Solves the problem of creating a README from scratch at the start of every project.'
    },
    {
        type: 'input',
        message: 'How should this code be installed?',
        name: 'installation',
        default: 'Detailed instructions here.'
    },
    {
        type: 'list',
        message: 'What license would you like cover under your app?',
        name: 'license',
        choices: ['Apache 2.0', 'MIT', 'Mozilla 2.0', '2-Clause BSD', 'No license'],
        default: ['No License']

    },
    {
        type: 'input',
        message: 'How do you want to handle tests?',
        name: 'tests',
        default: 'No tests available.'
    },
    {
        type: 'input',
        message: 'How can someone contribute to this project?',
        name: 'contributions',
        default: 'Submit a pull request and reach out through email.'
    },
    {
        type: 'input',
        message: 'Briefly describe your process for this project.',
        name: 'myProcess',
        default: 'I did coding.'
    },
    {
        type: 'input',
        message: 'Describe some of the challenges you faced, and what did you learn during this project?',
        name: 'whatIlearned',
        default: 'I learned things.'
    },
    {
        type: 'input',
        message: 'Describe some of the features you plan to implement in the future.',
        name: 'continuedDevel',
        default: 'I have big plans!'
    },
    {
        type: 'input',
        message: 'What email address can users contact you at?',
        name: 'email',
        default: 'awesomeperson@totallyrad.com'
    },
    {
        type: 'input',
        message: 'What is your github user name?',
        name: 'github',
        default: 'NaNifer'
    },
];



// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`README.md`, generateMarkdown(data), err => {
        if (err) {
            console.log(err, "writeToFile");
            return;
        }
        else {
            console.log("yay!");
        }
    }
    )
};




// Function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            writeToFile(answers.fileName, answers);
        })
        .catch(err => {
            console.log(err);
        })
};

// Function call to initialize app
init();
