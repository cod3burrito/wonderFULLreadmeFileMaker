const inquirer = require("inquirer");
const fs = require("fs");
const { off } = require("process");
const generateMarkdown = require("./utils/generateMarkdown");
    
inquirer
.prompt([
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
            name: "contact",
            message: "Can we reach you with additional questions?"
        }, {
            type: "list",
            name: "licenses",
            message: "Which license(s) protect this app?",
            choices: [
                "Creative Commons", 
                "Mozilla", 
                "Open Data Commons", 
                "none"
            ]
        }
    
])
.then((data) => {
    const pikachu = generateMarkdown(data)
    writeToFile("wonderFullREADME.md", pikachu);
});

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(error) {
        if(error) {
            return console.log(error);
        }
        return console.log("Wonderful! Your information is saved!");
    })
}

function init() {}

init();
