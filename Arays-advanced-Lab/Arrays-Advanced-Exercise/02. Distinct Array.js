function distinctArray(input) {
    let arr = input;
    let result = [];
    for(let num of arr){
        if (!result.includes(num)) {
            result.push(num)
        }
    }
    console.log(result.join(' '));
    
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])