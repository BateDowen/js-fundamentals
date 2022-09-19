function calculator(num, operator, num2) {
let result = num + operator + num2;
result = eval(result)
console.log(result.toFixed(2));
}
calculator(5, "+", 10);
