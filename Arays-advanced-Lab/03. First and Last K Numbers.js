function  firstAndLastKNumbers(input) {
        let arr = input;
        let arrL = arr.length;
        let arrKNums = arr.shift();
        console.log(arr.slice(0,arrKNums).join(' '));
        console.log(arr.slice(arrL - arrKNums).join(' '));
      
}
firstAndLastKNumbers([2, 
    7, 8, 9])