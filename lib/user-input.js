const inquirer = require('inquirer');

function getUserInput() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color:',
    },
    {
      type: 'input',
      name: 'textSize',
      message: 'Enter text size:',
    },
  ]);
}

module.exports = { getUserInput };
