function counterStrike(input) {
    let index = 0;
    let initialEnergy = Number(input.shift());
    let distance = input[index];
    let winCounter = 0
    while (distance != "End of battle"){
        initialEnergy -= Number(distance);
        if (initialEnergy < 0) {
            if (initialEnergy < 0) {
                initialEnergy = 0;
            }
            console.log(`Not enough energy! Game ends with ${winCounter} won battles and ${initialEnergy} energy`);
            return;
        }
        winCounter++;
        if (winCounter % 3 === 0) {
            initialEnergy += winCounter;
        }
        index++;
        distance = input[index];
    }
    let energyLeft = Number(initialEnergy);
    if (energyLeft <= 0) {
        energyLeft = 0;
    }
    console.log(`"Won battles: ${winCounter}. Energy left: ${energyLeft}`);
}
counterStrike(["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"])
counterStrike(["200",
"54",
"14",
"28",
"13",
"End of battle"])