function negativeOrPositiveNumbers(input) {
    let arr = input;
    let arrL = arr.length
    let result = [];
    for(let i = 0; i < arrL; i++){
       if (arr[i] < 0) {
        result.unshift(arr[i]);
       } else {
        result.push(arr[i]);
       }
        
    }console.log(result.join('\n'));
}
negativeOrPositiveNumbers(['3', '-2', '0', '-1'])