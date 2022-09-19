function solve(arr1, arr2) {
    let arr1Length = arr1.length;
    let arr2Length = arr2.length;
    let sameElement = [];
    let sameElement2= [];
    for(let i = 0; i < arr1Length; i++){
     sameElement = arr1[i];
     for(let j = 0; j < arr2Length; j++){
        sameElement2 = arr2[j];
        if (sameElement === sameElement2) {
            console.log(sameElement);
        }
    }
    }
}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2'])