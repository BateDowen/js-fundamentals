function sumDigits(num) {
    let sum = 0;
    let numToStr = num.toString();
    let numToStrL= numToStr.length;
    for(let i = 0; i < numToStrL; i++){
        let n = Number(numToStr[i])
        sum += n;
    }
    console.log(sum);
}
sumDigits(245678)