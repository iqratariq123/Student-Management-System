import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "student",
        type: "input",
        message: "Enter student name",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please enter a non-empty value.";
        },
    },
    {
        name: "courses",
        type: "list",
        message: "Select the coures to enrolled",
        choices: ["MS.office", "HTML", "javascript", "Typescript", "Python"]
    }
]);
const TutionFees = {
    "MS.office": 2000,
    "HTML": 2500,
    "javascript": 5000,
    "Typescript": 6000,
    "Python": 10000,
};
console.log(`\nTution Fees: ${TutionFees[answer.courses]}/-\n`);
console.log(`Balance: ${myBalance}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "pyment",
        type: "list",
        message: "select payment method",
        choices: ["Bank Tranfer", "EasyPaisa", "JazzCash"],
    }, {
        name: "amount",
        type: "input",
        message: "Transfer Money",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please enter a non-empty value.";
        },
    }
]);
console.log(`\nYou select pyment method ${paymentType.pyment}\n`);
const TutionFee = TutionFees[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (TutionFee === paymentAmount) {
    console.log(`congratulation, you have successfully enrolled in ${answer.courses}\n`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "what would you like to do next?",
            choices: ["view Status", "Exite"],
        }
    ]);
    if (ans.select === "view Status") {
        console.log("\n*******Status*******\n");
        console.log(`student Name: ${answer.student}`);
        console.log(`Student ID ${randomNumber}`);
        console.log(`course: ${answer.coures}`);
        console.log(`Tution Fees paid ${paymentAmount}`);
        console.log(`Balance: ${myBalance += paymentAmount}`);
    }
    else {
        console.log("\nExiting Student Management System\n");
    }
}
else {
    console.log("invalid amount due to course\n");
}
