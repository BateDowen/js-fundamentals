function piccolo(input) {
    let parking = {};
    for(el of input){
        let[command, car] = el.split(', ');
        if (command === "IN") {
            parking[car] = command;
        }else if (command === "OUT") {
            delete parking[car];
        }
    }
    let keys = Object.keys(parking);
    keys.sort((a, b) => a.localeCompare(b));
    console.log(keys.join('\n'));
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])