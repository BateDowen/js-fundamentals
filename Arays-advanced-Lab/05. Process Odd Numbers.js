function  processOddNumbers(arr) {
    let arrOfNums = arr;
    let arrL = arrOfNums.length;
    let newArr = [];
    for(let i = 0; i < arrL; i++){
        if (i % 2 != 0) {
            let sum = 0;
            sum = arrOfNums[i] * 2;
            newArr.push(sum);
        }

    } console.log(newArr.reverse().join(' '));
}
processOddNumbers([10, 15, 20, 25])