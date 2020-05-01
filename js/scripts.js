var add = function(number1, number2) {
  return number1 + number2;
};
var number1 = parseInt(prompt("Enter a number to add:"));
var number2 = parseInt(prompt("Enter another number to add:"));
var result = (add(number1, number2));
alert(result);

var subtract = function(number1, number2) {
  return number1 - number2;
};
var number1 = parseInt(prompt("Enter number to subtract:"));
var number2 = parseInt(prompt("Enter another number to subtract:"));
var result = (subtract(number1, number2));
alert(result);

var multiply = function(number1, number2) {
  return number1 * number2;
};
var number1 = parseInt(prompt("Enter number to multiply:"));
var number2 = parseInt(prompt("Enter another number to multiply:"));
var result = (multiply(number1, number2));
alert(result);
