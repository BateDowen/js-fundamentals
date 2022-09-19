function theLift(input) {
    let people = input.shift();
    let wagoons = input.join(' ').split(' ').map(x => Number(x));
    let arrL = wagoons.length;
    let newArr = [];
    let isEmpty
    for(let i = 0; i < arrL; i++){
        let freeSpace = wagoons[i];
        if (freeSpace === 0) {
            freeSpace = 4;
            if (Number(people) <= freeSpace) {
                newArr.push(Number(people));
                isEmpty = true;
                break;
            }else { 
            people = Number(people) - freeSpace;
            newArr.push(freeSpace);
            }
        } else {
            if (Number(people) > 4) {
                freeSpace = 4;
                people = Number(people) - wagoons[i];
                newArr.push(freeSpace);
                
            } else {
                people = Number(people) - wagoons[i];
                if (Number(people > 0)) {
                    newArr.push(Number(people)+wagoons[i]);
                    
                }else{
                    newArr.push(Number(people));
                    isEmpty = true;
                    break;
                }
                
            }
            
        }

    }
    if (isEmpty) {
        console.log(`The lift has empty spots!`);
        console.log(newArr.join(' '));
    } else if (Number(people) > 0) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(`${newArr.join(' ')}`);
    }else{
        console.log(`${newArr.join(' ')}`);
    }
}
theLift(["15", "0 0 0 2 0"]);
theLift(["20", "0 2 0"]);
