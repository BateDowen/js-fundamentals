function arrayModifier(input) {
    let arrToManupulate = input.shift().split(' ');
    input.pop();
    let inputL = input.length;
    for(let i = 0; i < inputL; i++){
        let command = input[i].split(' ');
        let index1 = Number(command[1]);
        let index2 = Number(command[2]);
        if (command[0] === "swap") {
            let rev = arrToManupulate[index1];
            arrToManupulate[index1] = arrToManupulate[index2];
            arrToManupulate[index2] = rev;
           
        } else if (command[0] === 'multiply') {
            let element = arrToManupulate[index1];
            let element2 = arrToManupulate[index2];
            let res = Number(element) * Number(element2);
            arrToManupulate.splice(arrToManupulate.indexOf(element), 1, res);
        } else if (command[0] === "decrease") {
            arrToManupulate.forEach((el, index) => {
                arrToManupulate[index] = el - 1;
            });

        }
    }
    console.log(arrToManupulate.join(', '));

}
arrayModifier( [
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ])