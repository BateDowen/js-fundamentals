function thePianist(input) {
    let numberOfPieces = Number(input.shift());
    let arrOfPieces = []
    for(let i = 0; i < numberOfPieces; i++){
        let line = input.shift(i);
        let token = line.split('|');
    
        arrOfPieces.push(token)
    }
    while (input != "Stop") {
        let line = input.shift();
        let token = line.split('|');
        if (token[0] === "Add") {
            let isIncludes = false;
           arrOfPieces.forEach(el=>{
            if (el.includes(token[1])) {
                isIncludes = true
            }
           });
            if (isIncludes) {
                console.log(`${token[1]} is already in the collection!`);
            }else{
                arrOfPieces.push([token[1],token[2], token[3]]);
                console.log(`${token[1]} by ${token[2]} in ${token[3]} added to the collection!`);
            }
        }
        if (token[0] === "Remove") {
           let isIncludes = false;
           arrOfPieces.forEach(el=>{
            if (el.includes(token[1])) {
                isIncludes = true
            }
           });
           if (isIncludes) {
            for(let el of arrOfPieces){
                if (el.includes(token[1])) {
                    arrOfPieces.splice(arrOfPieces.indexOf(el),1);
                    console.log(`Successfully removed ${token[1]}!`);
                }
            }
           } else{
            console.log(`Invalid operation! ${token[1]} does not exist in the collection.`);
             }  
        }

        if (token[0] === "ChangeKey") {
            let isIncludes = false;
            arrOfPieces.forEach(el=>{
             if (el.includes(token[1])) {
                 isIncludes = true
             }
            });
            if (isIncludes) {
                for(let el of arrOfPieces){
                    if (el.includes(token[1])) {
                        el.splice(2, 1,token[2]);
                        console.log(`Changed the key of ${token[1]} to ${token[2]}!`);
                    }
                }
            } else{
                console.log(`Invalid operation! ${token[1]} does not exist in the collection.`);
            }
        }
    }
    for(let line of arrOfPieces){
        console.log(`${line[0]} -> Composer: ${line[1]}, Key: ${line[2]}`);
    }
    
}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ])