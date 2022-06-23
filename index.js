//basic calculator

//taking input
const operator = prompt("Enter the Operator you want to work with (either +,-,* or /): ");

const num1 = parseFloat(prompt("Enter first number: "));

const num2 = parseFloat(prompt("Enter second number: "));

let result;
if (isNaN(num1)  || isNaN(num2) ) {
    alert("Enter Numbers only!");
}
else if (operator == '+'){
    result = num1 + num2;
}

else if (operator == '-'){
    result = num1 - num2;
}

else if (operator == '*'){
    result = num1 * num2;
}

else if (operator == '/'){
    result = num1 / num2;
}
else{
    alert("You entered an Invalid Operator!\n Please select either (+,-,*,/)");
}

alert("Your answer is: "+result);
