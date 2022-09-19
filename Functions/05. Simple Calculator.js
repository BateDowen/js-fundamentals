function simpleCalculator(num1, num2, operator) {
    let multiply = () => num1 * num2;
    let divide = () => num1 / num2;
    let add = () => num1 + num2;
    let subtract = () => num1 - num2;
    let res = 0;
    switch (operator){
        case "multiply" : res = multiply(); break
        case "divide" : res = divide(); break
        case "add" : res = add(); break
        case "subtract" : res = subtract(); break
    }
    console.log(res);
}
simpleCalculator([5],
    [5],
    ['multiply'])