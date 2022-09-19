function isPerfectNumber(num) {
    let number = num;
    let sum = 0;
    let isPerfect = (number) =>{
        for(let i = 1; i < number; i++){
            if (number % i == 0) {
                sum += i;
            }
        }
        if (number % sum == 0) {
            console.log(`We have a perfect number!`);
        } else {
           console.log(`It's not so perfect.`); 
        }
    }
    isPerfect(number);  
}
isPerfectNumber(6)
isPerfectNumber(28)
isPerfectNumber(1236498)