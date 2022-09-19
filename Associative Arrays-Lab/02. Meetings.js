function meetings(input) {
    // let meeting = {};
    // for(let entry of input){
    //     // let [day, name] = entry.split(' ')
    //     entry = entry.split(' ');
    //     let day = entry[0];
    //     let name = entry[1];

    //     if (meeting.hasOwnProperty(day)) {
    //         console.log(`Conflict on ${day}!`);
    //     } else {
    //         meeting[day] = name;
    //         console.log(`Scheduled for ${day}`);
    //     }
    // }
    // for(let assosKey in meeting){
    //     console.log(`${assosKey} -> ${meeting[assosKey]}`);
    // }
    let meeting = new Map();
    for(let entry of input){
        entry = entry.split(' ');
        let day = entry[0];
        let name = entry[1];

        if (meeting.has(day)) {
            console.log(`Conflict on ${day}`);
        }else {
            meeting.set(day, name);
            console.log(`Scheduled for ${day}`);
        }
    }
    for(let key of meeting){
        console.log(`${key[0]} -> ${key[1]}`);
    }
    
}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])