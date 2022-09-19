function sumEvenNumbers(arr) {
    for(let i = 0; i < arr.length; i++){
        arr[i] = Number(arr[i]);
    }
    let output = 0;
    for (let number of arr) {
       if (number % 2 == 0) {
        output += number 
       } 
    }
    console.log(output);
}
sumEvenNumbers(['1','2','3','4','5','6','8'])