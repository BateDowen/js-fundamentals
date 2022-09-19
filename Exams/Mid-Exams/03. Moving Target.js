function movingTarget(input) {
    let arrOfTargets = input.shift().split(' ');
    input.pop();
    let arrl = input.length;
    for(let i = 0; i < arrl; i++){
        let command = input[i].split(' ');
        let index = command[1];
        let value = command[2];
        switch(command[0]){
            case "Shoot":
                let target = arrOfTargets[index];
                target -= value;
                arrOfTargets[index] = target;
                if (target <= 0) {
                    arrOfTargets.splice(index, 1);
                }
                break;
            case "Add":
                if (index <= arrOfTargets.length) {
                    arrOfTargets.splice(index, 0, value); // [index + 1]?
                } else{
                    console.log(`Invalid placement!`);
                }
                break;
            case "Strike":
                if (arrOfTargets[index - value]) {
                    let elementsToRemove = value * 2
                    arrOfTargets.splice([index - value], elementsToRemove + 1)
                }else{
                    console.log("Strike missed!");
                }
                
        }
        
    }
    console.log(arrOfTargets.join('|'));

}
movingTarget((["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"]))
movingTarget(["1 2 3 4 5",
"Strike 0 1",
"End"])