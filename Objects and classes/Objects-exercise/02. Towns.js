function towns(input) {
    for(let table of input){
        let [town, latitute, longitute] = table.split(' | ');
        let currTownInfo = {
            town: town,
            latitute: Number(latitute).toFixed(2),
            longitute: Number(longitute).toFixed(2)
        };
        console.log(currTownInfo);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)