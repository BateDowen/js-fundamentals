function plantDiscovery(input) {
    let numberOfPlants = input.shift();
    let text = input.slice(0, Number(numberOfPlants));
    let command = input.slice(Number(numberOfPlants))
    command.pop()

    let plantsInfo = {}
    for(let line of text){
         line = line.split('<->');
        let plantName = line[0];
        let plantRarity = line[1]
        if (!plantsInfo[plantName]) {
            plantsInfo[plantName] = {
                rarity : 0,
                rating : 0,
                counter: 0
            }
        }
        plantsInfo[plantName].rarity = plantRarity;
    }
    
    for(let line of command){
        line = line.split(': ');

        if (line[0]=== "Rate") {

            let plantToRate = line[1].split(' - ');
            let plantName = plantToRate[0]
            if (!plantsInfo.hasOwnProperty(plantName)) {
                console.log("error");
            }else {
                let rating = plantToRate[1];
                plantsInfo[plantName].rating += Number(rating);
                plantsInfo[plantName].counter++;
            }
        
        } else if (line[0] === "Update") {

            let plantToRate = line[1].split(' - ');
            let plantName = plantToRate[0]
            if (!plantsInfo.hasOwnProperty(plantName)) {
                console.log("error");
            }else {
                let newRarity = plantToRate[1];
                plantsInfo[plantName].rarity = Number(newRarity);
            }
         }else if (line[0] === "Reset") {

            let plantToRate = line[1].split(' - ');
            let plantName = plantToRate[0]
            if (!plantsInfo.hasOwnProperty(plantName)) {
                console.log("error");
            }else {
                plantsInfo[plantName].rating = 0;
            }
         }
    }

    plantsInfo = Object.entries(plantsInfo);
    console.log(`Plants for the exhibition: `);
    for(let plant of plantsInfo){
        let currPlant = plant[0];
        let currPlantProperties = plant[1]
        let average = Number(currPlantProperties.rating) / Number(currPlantProperties.counter);
        if (Number(currPlantProperties.rating === 0)) {
            average = 0
        }
        console.log(`- ${currPlant}; Rarity: ${currPlantProperties.rarity}; Rating: ${average.toFixed(2)}`);
    
    }

}
plantDiscovery((["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"]))