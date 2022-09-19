function condenseArrayToNumber(arr) {
    let arrLength = arr.length
    while (arr.length > 1) {
        let newArr = []
        for (let i = 0; i < arr.length - 1; i++) {
            newArr.push(arr[i] + arr[i + 1])
        }
        arr = newArr
        
    }
    console.log(Number(arr));

}
condenseArrayToNumber([2,10,3])