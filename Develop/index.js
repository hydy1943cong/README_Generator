// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const colors = require("colors");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: colors.brightMagenta("What is the title of your project?")
    },
    {
        type: 'input',
        name: 'description',
        message: colors.brightMagenta("Provide a brief description of your project.")
    },
    {
        type: 'input',
        message: colors.brightMagenta('Pleae provide the installation instructions of your project.'),
        name: 'installation'
    },
    {
        type: 'input',
        name: 'usage',
        message: colors.brightMagenta("Provide usage information.")
    },
    {
        type: 'input',
        name: 'contributing',
        message: colors.brightMagenta("Who are the contributors?")
    },
    {
        type: 'input',
        name: 'tests',
        message: colors.brightMagenta("Please provide test instructions if there is any.")
    },
    {
        type: 'checkbox',
        message: colors.brightMagenta('What languages were used to create this project?'),
        name: 'language',
        choices: ['HTML', 'CSS', 'Javascript','C++','Python']
    },
    {
        type: 'checkbox',
        message: colors.brightMagenta('Please choose a license for you application.'),
        name: 'license',
        choices: ['None', 'MIT License', 'Apache License 2.0','GNU General Public License v3.0','BSD 2-clause "Simplified" license','BSD 3-clause "New" or "Revised" license']
    },
    {
        type: 'input',
        name: 'github',
        message: colors.brightMagenta("Please provide your the user name of your github.")
    },
    {
        type: 'input',
        name: 'email',
        message: colors.brightMagenta("Please provide your email address if you'd like to be contacted.")
    }

]


// TODO: Create a function to write README file
inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(answers);
        writeToFile(answers);
        })
        .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });


function writeToFile(answers) {
    const readmeContent = `
  # Title: ${answers.title}\n\n
  ## Table of Content

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Languages](#languages)
- [License](#license)
- [Questions](#questions)

  ## Description
  ${answers.description}\n\n
  ## Installation
  ${answers.installation}\n\n
  ## Usage
  ${answers.usage}\n\n
  ## Contributing
  ${answers.contributing}\n\n
  ## Tests
  ${answers.tests}\n\n
  ## Languages
  ${answers.language.join(', ')} \n\n
  ## License
  ${answers.license.join(', ')} \n\n
  ## Questions
  ### Check my github: ${answers.github}\n\n
  ### Email me with your questions: ${answers.email}\n\n
    `;
    
    fs.writeFile('README.md', readmeContent, (err) => {
        if (err) throw err;
        console.log('README.md created successfully!');
      });
}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
