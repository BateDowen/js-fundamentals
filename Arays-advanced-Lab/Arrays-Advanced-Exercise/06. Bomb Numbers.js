function bombNumbers(sequence, bomb) {
    let specialnum = bomb[0];
    let bombsPower = bomb[1];
    while (sequence.includes(specialnum)) {
        let index = sequence.indexOf(specialnum);
        let elemntsToRemove = bombsPower * 2 + 1;
        let startIndex = index - bombsPower;

        if (startIndex < 0) {
            elemntsToRemove += startIndex;
            startIndex = 0;
        }
        sequence.splice(startIndex, elemntsToRemove);
    }
    let finalRes = sequence.reduce((a,b) =>{
        return a + b;
    }, 0);
    console.log(finalRes);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2])