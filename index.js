const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    /* Pass your questions in here */
    {
        type: 'input',
        name: 'Title',
        message: 'What is your first name?',
        default: 'human bean', 
    },
    {
        type: 'input',
        name: 'Description',
        message: 'What is your last name?',
        default: 'tiri', 
    },
    {
        type: 'input',
        name: 'Table of Contents',
        message: 'What is your last name?',
        default: 'tiri', 
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What is your last name?',
        default: 'tiri', 
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'What is your last name?',
        default: 'tiri', 
    },
    {
        type: 'input',
        name: 'License',
        message: 'What is your last name?',
        default: 'tiri', 
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'What is your last name?',
        default: 'tiri', 
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'What is your last name?',
        default: 'tiri', 
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'What is your last name?',
        default: 'tiri', 
    },
  ];

inquirer.prompt(questions).then((answers) => {
    // Use user feedback for... whatever!!
    console.log("\nSession Details: ");
    console.log(JSON.stringify(answers, null, '  '));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

 






