 function countPositivesSumNegatives(input) {
    if (input === null) {
       let arrToManupulate = [];
       return arrToManupulate; 
       } 
   let arrL = input.length;
   let arrToManupulate = input.slice()
   let countOfPositive = 0;
   let sumOfNegative = 0;
   let zero = 0
   for(let i = 0; i<=arrL; i++){
    let current = input[i];
    if (current > 0) {
        countOfPositive ++
        arrToManupulate.shift(current);
    } else if (current < 0) {
        sumOfNegative += current;
        arrToManupulate.shift(current);
    } else if (current === 0) {
        zero++;
        arrToManupulate.shift(current)
    }
   }   
   
   arrToManupulate.push(countOfPositive,sumOfNegative);
   if (countOfPositive === 0 && sumOfNegative === 0) {
    arrToManupulate = []
   }
   return arrToManupulate


}    
console.log(countPositivesSumNegatives([0,0]));
