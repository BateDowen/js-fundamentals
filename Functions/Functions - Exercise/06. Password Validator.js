function passwordValidator(input) {
    let inputPass = input;
    let inputL = input.length;
   
    if (inputL < 6 || inputL > 10) {
        console.log(`Password must be between 6 and 10 characters`);
    }
   function letterAndDigitsCheck (input) {
    let passWord = '';
    let digitCounter = 0;
    for(let i = 0; i < inputL; i++){
        let curElement = inputPass[i];
        let asciiCode = curElement.charCodeAt(0);
        if (asciiCode>= 48 && asciiCode <= 57){
            digitCounter++;
            passWord += curElement;
        }
        if(asciiCode >= 65 && asciiCode <= 90 ||
             asciiCode >= 97 && asciiCode <= 122) {
            passWord += curElement;
        } 
    } if (digitCounter >= 2 && passWord.length == inputL) {
        console.log(`Password is valid`);
    } 
    if (passWord != inputPass) {
        console.log(`Password must consist only of letters and digits`);  
    }
     if (digitCounter < 2 ){
        console.log(`Password must have at least 2 digits`);
    } 
     
   } letterAndDigitsCheck(inputPass)
}
passwordValidator('logIn')
passwordValidator('MyPass123')
passwordValidator('Pa$s$s')