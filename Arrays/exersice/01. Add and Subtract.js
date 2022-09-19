function solve(arr) {
    let arrlength = arr.length;
    let newArr = [];
    let sum1 = 0;
    let sum2= 0;
    for (let i = 0; i < arrlength; i++) {
        let currentNum = arr[i];
        if (currentNum % 2 === 0) {
            let newNum = currentNum + i;
            newArr.push(newNum)
        } else {
            let newNum = currentNum - i;
            newArr.push(newNum)
        }
        sum1 += newArr[i];
    }
    for (const iterator of arr) {
        sum2 += iterator;
    }
    console.log(newArr);
    console.log(sum2);
    console.log(sum1);
}
solve([5, 15, 23, 56, 35])