function palindromeIntegers(input) {
    let arrayOfNumbers = input;
    let arrL = arrayOfNumbers.length;
    let isPalindrome = (num) => {
        let startNum = num;
        let reversedNum = Number(startNum.toString().split("").reverse().join(""));
        if(startNum === reversedNum){
            return "true";
        } else {
            return "false";
        }
    };
    for(let i = 0; i < arrL; i++){
        let currentNum = arrayOfNumbers[i];
        console.log(isPalindrome(currentNum));
    }

}
palindromeIntegers([123,323,421,121])