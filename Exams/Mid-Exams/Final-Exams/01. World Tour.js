function worldTour(input) {
    let stops = input.shift();
   input.pop();
   for(let line of input){
       line = line.split(':');
       if (line[0] === 'Add Stop') {
          let before = stops.substring(0, Number(line[1]));
          let after = stops.substring(Number(line[1]));
          stops = before + line[2] + after;
          console.log(stops);
       } else if (line[0] === 'Remove Stop') {
          let before = stops.substring(0, Number(line[1]));
          let after = stops.substring(Number(line[2])+1);
          stops = before + after;
          console.log(stops);
       } else if (line[0] === 'Switch') {
            let oldStr = line[1];
            let newStr = line[2];
            stops = stops.replace(oldStr, newStr);
            console.log(stops);
       }
   }
   console.log(`Ready for world tour! Planned stops: ${stops}`);
}
worldTour((["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"]))