function pirates(input) {
    input.pop(0);
    let sailIndex = input.indexOf("Sail");
    let townsInput = input.slice(0, sailIndex);
    let actionIput = input.slice(sailIndex + 1);
    
}
pirates((["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"]))