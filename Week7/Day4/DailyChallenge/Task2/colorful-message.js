// colorful-message.js
const chalk = require('chalk');

function displayMessage() {
    console.log(chalk.blue('This is a blue message!'));
    console.log(chalk.red.bold('This is a bold red message!'));
    console.log(chalk.green.bgYellow('This is a green message on a yellow background!'));
}

module.exports = displayMessage;
