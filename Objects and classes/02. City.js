function city(obj) {
    let cityEntries = Object.entries(obj);
    for(let [cityKey, cityValue] of cityEntries){
        console.log(`${cityKey} -> ${cityValue}`);
    }
}
city({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
})