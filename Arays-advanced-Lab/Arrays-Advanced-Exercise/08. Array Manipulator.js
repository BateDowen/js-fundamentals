function arrayManipulator(numbers, commands) {
    for(let command of commands){
        let tokens = command.split(' ');
        let currentComand = tokens[0];
        if(currentComand === "add"){
            let index = Number(tokens[1]);
            let element = Number(tokens[2]);
            numbers.splice(index,0,element);
        }else if (currentComand === "addMany") {
            let index = Number(tokens[1]);
            tokens.splice(0, 2);
            let numbersToAdd = tokens.map(Number);
            numbers.splice(index,0,...numbersToAdd);
        }else if(currentComand === "contains") {
            let result = numbers.indexOf(Number(tokens[1]));
            console.log(result);
        }else if(currentComand === "remove") {
            let index = Number(tokens[1]);
            numbers.splice(index,1);
        }else if(currentComand === "shift") {
            let position = tokens[1];
            for(let i = 0; i < position; i++){
                let firstNum = numbers.shift();
                numbers.push(firstNum)
            }
        }else if(currentComand === "sumPairs") {
            let resultArr =[];
            if(numbers.length % 2 !=0){
                numbers.push(0)
            }
            for(let i = 0; i < numbers.length - 1; i+=2){
                let sum = numbers[i] + numbers[i+1];
                resultArr.push(sum);
            }
            numbers = resultArr;
        }else if (currentComand === "print") {
            console.log(`[ ${numbers.join(', ')} ]`);
        }
        
    }
}
arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print'])