function printElement(arr) {
    let step = arr.pop();
    let newArr = [];
    let arrL = arr.length;
    for(let i = 0; i < arrL; i+=Number(step)){
        let current = arr[i];
        newArr.push(current);
    }
    console.log(newArr.join(' '));
}
printElement(['5', '20', '31', '4', '20', '2'])
printElement(['dsa', 'asd', 'test', 'test', '2'])
printElement(['5', '20', '31', '4', '20', '2'])