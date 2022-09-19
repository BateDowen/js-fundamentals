function sumFirstAndLast(input) {
    let arr = input;
    let firstElement = arr.shift();
    let lastElement = arr.pop();
    let result = Number(firstElement) + Number(lastElement);
    console.log(result);
}
sumFirstAndLast(['20', '30', '40'])