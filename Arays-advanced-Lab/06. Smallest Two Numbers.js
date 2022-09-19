function smallestTwoNumbers(arr) {
    let array = arr;
    let sortedArr = array.sort((a,b) => {
        return a - b;
    });
    console.log(sortedArr.slice(0, 2).join(' '));
}
smallestTwoNumbers([30, 15, 50, 5])