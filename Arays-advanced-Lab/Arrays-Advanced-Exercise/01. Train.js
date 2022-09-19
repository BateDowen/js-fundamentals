function train(input) {
    let wagoons = input.slice(0, 1);
    let maxCapacity = input[1];
    input.splice(0,2);
    let arrAsStr = String(wagoons);
    let splitArr = arrAsStr.split(' ');
    
    for(let i = 0; i < input.length; i++){
        let current = String(input[i])
        let command = current.split(' ');
        let currentComnd = command[0];
        if (currentComnd === "Add") {
            splitArr.push(command[1]);
        }else {
            
            for(let j = 0; j < splitArr.length; j++){
                let firstElement = splitArr[j];
                if (Number(firstElement) + Number(currentComnd) <= maxCapacity) {
                    splitArr.splice(j, 1, Number(firstElement) + Number(currentComnd));
                    break;
                }
            }

        }
    } console.log(splitArr.join(' '));
        
    
}
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6'])