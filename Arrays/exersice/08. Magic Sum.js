function solve(arr, num) {
    let array = arr;
    let arrL = array.length;
    
    for(let i = 0; i < arrL; i++){
        let element = array[i];
        
        for(let j = i + 1; j < arrL; j++){
            let element2 = array[j];
            let sum = element + element2;
             if (sum === num) {
                 console.log(`${element} ${element2}`);
            }
        } 
    } 
    
}
solve([1, 7, 6, 2, 19, 23],8)
solve([14, 20, 60, 13, 7, 19, 8], 27)
solve([1, 2, 3, 4, 5, 6],6)
