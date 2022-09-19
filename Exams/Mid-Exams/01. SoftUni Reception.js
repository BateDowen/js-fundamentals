function softUniReception(input) {
    let firstEmployeEf = +input[0];
    let secEmployeEf  = +input[1];
    let thirdEmployeEf = +input[2];
    let totalEf = firstEmployeEf + secEmployeEf + thirdEmployeEf;
    let students = +input[3];
    let finishedStudents = 0;
    let hours = 0
    for(let i = 1; i <= students; i++){
        if (i % 4 === 0) {
            hours++
            continue;
        }else{
            hours++;
            finishedStudents += totalEf;
        }
        
        if (finishedStudents >= students) {
             break;
        }
    }
    console.log(`Time needed: ${hours}h.`);
}
softUniReception(['5','6','4','20'])
softUniReception(['1','2','3','45'])
softUniReception(['3','2','5','40'])
