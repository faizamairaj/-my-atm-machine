#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000; // Dollar
let myPin = 1234;

async function main() {
    let pinAnswer = await inquirer.prompt([
        {
            type: "number",
            name: "Pin",
            message: "Enter your pin code:",
        }
    ]);
       
    if (pinAnswer.Pin === myPin) {
   console.log("Correct pin code!!!");
   
   let operations = await inquirer.prompt([
    {
        type: "list",
        name: "operation",
        message: "Please select an option",
        choices: ["Withdraw", "Check balance"]
    }
   ]);
   console.log(operations.operation);
   
   if (operations.operation === "Withdraw") {
     let amountAns = await inquirer.prompt([
        {
            type: "number",
            name: "amount",
            message: "Enter the amount to withdraw"
        }
     ]);
     myBalance -= amountAns.amount;
     console.log(`Your remaining blance is: ${myBalance}`);
   } else if(operations.operation === "Check balance") {
      console.log(`Your balance is: ${myBalance}`);
   }
    } else {
        console.log("Incorrect pin number");
    }
}
main();