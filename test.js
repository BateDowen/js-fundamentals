function solve1(input) {
 let wordToReverse = input[0];
 let wordAsArray = wordToReverse.split('');
 let revrsedArray = wordAsArray.reverse();
 let arrAsStr = revrsedArray.join('')
 console.log(wordAsArray);
}
solve1(["hello"])
// let arr = [1,2,3,4,5,6,7,8,9];

// let firstElement = arr.shift();
// console.log(arr);
// console.log(firstElement);

function solve(arr) {
    
    let index = arr.findIndex((el , indx) => {
       if ((arr.slice(0 , indx).reduce((acc , current) => acc + current ,0) - 
            arr.slice(indx + 1).reduce((acc , current) => acc + current ,0)) === 0 ) {
            return true;
       }
        
    })
    if (index !== -1) {
        console.log(index);
    } else {
    console.log('no');
    }
}
solve([1, 2, 3, 3])

function functions() {
    solve1();
    solve();
}
functions()
