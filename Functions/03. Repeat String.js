let repeatString = repeatString1(["abc", 3]);
function repeatString1(input) {
    let str = input [0];
    let num = Number(input[1])
    let res =''
    for(let i = 1; i <= num; i++){
        res += str;
    } 
    return res;
} 

console.log(repeatString);
