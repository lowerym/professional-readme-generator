// Packages needed for this application
const inquirer = require("inquirer");

const fs = require("fs");

const path = require("path");

// Array of questions for user input
const questions = [

  {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
  },

  {
    type: "input",
    name: "description",
    message: "Enter a brief description of your project."
  },

  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?"
  },

  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  },

  {
    type: "input",
    name: "usage",
    message: "What is the intended usage of this repo?"
  },

  {
    type: "input",
    name: "contributors",
    message: "Who contributed to this repo?"
  },

  {
    type: "input",
    name: "test",
    message: "What command should be used to run tests?",
    default: "npm test"
  },

  {
    type: "list",
    name: "license",
    message: "Which license does your project have?",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "GLP3.0", "BSD2", "BSD3", "None"]
  }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
