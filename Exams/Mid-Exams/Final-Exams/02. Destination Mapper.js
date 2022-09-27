function destinationMapper(input) {
    let text = input[0];
    let regex = /(=|\/)(?<destination>[A-Z][A-Za-z]{2,})(\1)/g;
    
    let validMatch;
    let destinations = []
    while (validMatch = regex.exec(input)){
        validMatch = validMatch.groups;
        destinations.push(validMatch.destination);
    }
    let travelPoints = 0;
    for(let city of destinations){
        travelPoints += city.length;
    }
    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);

}
destinationMapper(("=Ha=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i="))