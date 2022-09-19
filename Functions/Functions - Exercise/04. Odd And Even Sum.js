function oddAndEvenSum(input) {
    let inputAsStr = input.toString()
    let inputL = inputAsStr.length

    let takeEvenSum = function(numAsStr) {
        let evenSum = 0
        for(let i = 0; i < inputL; i++){
            let currentDigit = Number(numAsStr[i]);
            if (currentDigit % 2 === 0) {
                evenSum += currentDigit;
            }
        }
        return evenSum;
    }
    let takeOddSum = (numAsStr) => {
        let oddSum = 0;
        for(let i = 0; i < inputL; i++){
            let currentDigit = Number(numAsStr[i]);
            if (currentDigit % 2 != 0) {
                oddSum += currentDigit;
            }
        }
        return oddSum;
    }
    console.log(` Odd sum = ${takeOddSum(inputAsStr)}, Even sum = ${takeEvenSum(inputAsStr)}`);
}
oddAndEvenSum(1000435)