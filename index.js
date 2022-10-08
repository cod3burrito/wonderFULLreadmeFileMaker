// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { off } = require("process");
    
// TODO: Create an array of questions for user input
inquirer
.prompt([
    // const questions = 

        {
            type: "input",
            name: "username",
            message: "What's your GitHub username?"
        }, {
            type: "input",
            name: "project_name",
            message: "What is your coding project?"
        }, {
            type: "input",
            name: "description",
            message: "Tell us about your project!"
        }, {
            type: "input",
            name: "install",
            message: "Tell us how to install it."
        }, {
            type: "input",
            name: "usage",
            message: "How do we need to use it?"
        }, {
            type: "input",
            name: "credit",
            message: "Are there any sources to cite? Any collaborators on the project?"
        }
    
])
.then((data) => {
    const filename = `${data.project_name.toLowerCase()+ 'README.md'}.json`;
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!'))
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(error) {
        if(error) {
            return console.log(error);
        }
        return console.log("Got it! Your information is saved!");
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
