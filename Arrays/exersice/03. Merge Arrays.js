function solve(firstArr, secondArr) {
    let firstArrLen = firstArr.length;
    let thirdArr = [];
    let even = 0;
    let element = '';
    let element2 = ''
    for(let i = 0; i < firstArrLen; i++){
        element = firstArr[i];
        element2 = secondArr[i];
        if (i % 2 === 0) {
            even = `${Number(element) + Number(element2)}`
        } else {
           even = element + element2; 
        }
        thirdArr.push(even)
       
    }
    console.log(thirdArr.join(' - '));
}
solve(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])