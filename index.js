#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    { message: "Enter first Number", type: "number", name: "firstnumber" },
    { message: "Enter second Number", type: "number", name: "secondnumber" },
    { message: "select one of the operators to perform operations",
        type: "list", name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
// conditional statement
if (answer.operator === "addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("Please select valid operator");
}
