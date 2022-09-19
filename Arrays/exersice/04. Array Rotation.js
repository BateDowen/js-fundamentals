function solve(arr, num) {
    for(let i = 0; i < num; i++){
        let lastElement = arr[0];
        arr.shift();
        arr.push(lastElement)
    }
   
    console.log(arr.join(' '));
}
solve([32, 21, 61, 1], 4)