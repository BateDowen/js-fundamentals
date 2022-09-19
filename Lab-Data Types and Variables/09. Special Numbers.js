function specialNumbers(n) {
    for(let i = 1; i <= n; i++){
    let sum = 0
    let result = i;
    while (result > 0) {
        sum += result % 10;
        result = Math.floor(result / 10)
    }
        if (sum == 5 || sum == 7 || sum == 11) {
            console.log(`${i} - True`);
        } else{
            console.log(`${i} - False`);
        }
    }
}
specialNumbers(15)