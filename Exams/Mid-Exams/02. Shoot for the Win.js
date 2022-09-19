function shootForTheWin(input) {
    let targets = input.shift().split(' ').map(Number);
    input.pop();
    let arrL = input.length;
    let counter = 0;
    for(let i = 0; i < arrL; i++){
        let indexOfTarget = input[i];
        let shotedTarget = targets[indexOfTarget];
        if (shotedTarget > -1) {
            counter++;
            targets.splice(indexOfTarget, 1, -1);
            for (let j = 0; j < targets.length; j++) {
                let index = targets[j];
                if (index === -1) {
                    continue;
                }
                if (Number(index) > shotedTarget) {
                    targets[j] -= shotedTarget;
                }
                else if(Number(index) <= shotedTarget){
                    targets[j] += shotedTarget;
                }
            }
        }
        
    }
    console.log(`Shot targets: ${counter} -> ${targets.join(' ')}`);
    
}
// shootForTheWin(["24 50 36 70",
// "0",
// "4",
// "3",
// "1",
// "End"])
shootForTheWin(["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"])