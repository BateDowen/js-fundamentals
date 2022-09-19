function searchForNumber(collection, numbers) {
    let elemntsToCut = numbers[0];
    let elementsToDel = numbers[1];
    let elementsToFid = numbers[2];
    let modifiedArr = collection.slice(0, elemntsToCut);
    modifiedArr.splice(0, elementsToDel);
    let counter = 0;
    let modifiedArrL = modifiedArr.length;
    for(let i = 0; i < modifiedArrL; i++){
        if (elementsToFid === modifiedArr[i]) {
            counter++;
        }
    }
    console.log(`Number ${elementsToFid} occurs ${counter} times.`);
}
searchForNumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3])