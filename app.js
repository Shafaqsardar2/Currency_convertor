#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blueBright("***CURRENCY CONVERTOR***"));
const currency = {
    USD: 1,
    PKR: 277.54,
    INR: 83.30,
    EUR: 0.92,
    AFN: 72.15,
    BDT: 117.90,
    XOF: 607.58,
    TRY: 32.35,
    IRR: 42225.00,
    CNY: 7.25,
};
let userSelection = await inquirer.prompt([
    {
        name: "from",
        message: "Please Select a currency that you want to convert",
        type: "list",
        choices: ['USD', 'PKR', 'INR', 'EUR', 'AFN', 'BDT', 'XOF', 'TRY', 'IRR', 'CNY'],
    },
    {
        name: "To",
        message: "Select the curerncy in which you want to convert",
        type: "list",
        choices: ['USD', 'PKR', 'INR', 'EUR', 'AFN', 'BDT', 'XOF', 'TRY', 'IRR', 'CNY'],
    },
    {
        name: "Amount",
        message: 'Enter the amount you want to convert',
        type: "number",
    }
]);
let fromList = currency[userSelection.from];
let toList = currency[userSelection.To];
let amount = userSelection.Amount;
let BaseAmount = amount / fromList;
let convertedAmount = amount * toList;
let result = Math.round(convertedAmount);
console.log(chalk.bgMagenta(result));
