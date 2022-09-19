function sorting(input) {
    let arr = input;
    let sortedArr = arr.sort((a,b)=>{
        return a - b;
    });
    let newArr = [];
    while (sortedArr.length !== 0) {
        let biggerNum = sortedArr.pop();
        let smallerNum = sortedArr.shift();

        newArr.push(biggerNum);
        newArr.push(smallerNum);
    }
    console.log(newArr.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])