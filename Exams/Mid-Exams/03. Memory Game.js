function memoryGame(input) {
    let elements = input.shift().split(' ');
    let end = input.pop();
    let arrL = input.length;
    for(let i = 0; i < arrL; i++){
        let indexes = input[i].split(' ');
        let firstIndex = +indexes[0];
        let secIndex = +indexes[1];
        if (firstIndex === secIndex || firstIndex < 0 || secIndex <0) {
            elements.splice((elements.length / 2),0,`-${i + 1}a`,`-${i + 1}a`);
            console.log("Invalid input! Adding additional elements to the board");
            continue;
        }
        let firstIndexEl = elements[firstIndex];
        let secIndexEl = elements[secIndex];
        if (firstIndexEl === secIndexEl) {
            elements.splice(firstIndex,1);
            secIndex === 0 ? secIndex === 0 : secIndex -= 1; 
            elements.splice(secIndex ,1);
            
            console.log(`Congrats! You have found matching elements - ${firstIndexEl}!`);
        } else {
            console.log("Try again!");
        }
        if (elements.length === 0) {
          console.log(`You have won in ${i+1} turns!`);
          return;  
        }
    }
    console.log(`Sorry you lose :(`);
    console.log(`${elements.join(' ')}`);

}
memoryGame( [
    "0 0 0 0 0 0 0 0 ", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ])
memoryGame([
    "a 2 4 a 2 4", 
    "0 3", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ])