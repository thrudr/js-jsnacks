// USER CHOISE
let firstNumber = prompt("Choose a number:");
let secondNumber = prompt("Choose another number:");

let number1 = parseInt(firstNumber);
let number2 = parseInt(secondNumber);

// CONDITION
if (number1 > number2){
    console.log(number1);
    console.log("The first number is larger than the second number.");

} else if (number2 > number1){
    console.log(number2);
    console.log("The second number is larger than the second number.");

} else {
    console.log(number1, number2);
    console.log("The numbers are equal.");
}

