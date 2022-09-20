function theImitationGame(input) {
    let message = input[0]
    while (input[0] != "Decode") {
        let line = input.shift();
        let command = input[0];
        let arrOfCommands = command.split('|');

        if (arrOfCommands[0] === "Move") {
            let numOfletters = arrOfCommands[1];
            let lettersToMove = message.substring(0, numOfletters);
            message = message.substring(numOfletters, message.length)
            message = message.concat(lettersToMove)
           

        } else if (arrOfCommands[0] === "Insert") {
            
            let index = arrOfCommands[1];
            let value = arrOfCommands[2];
            message = message.substring(0, index) + value + message.substring(index, message.length)

        } else if (arrOfCommands[0] === "ChangeAll") {

            let strToChange = arrOfCommands[1];
            let strToReplace = arrOfCommands[2];
            let regex = new RegExp(strToChange, 'g')
            message = message.replace(regex, strToReplace);
        }
        
    }
    console.log(`The decrypted message is: ${message}`);

}
theImitationGame([
    // 'zzHe',
    // 'ChangeAll|z|l',
    // 'Insert|2|o',
    // 'Move|3',
    'Decode',
  ])
//   theImitationGame([
//     'owyouh',
//     'Move|2',
//     'Move|3',
//     'Insert|3|are',
//     'Insert|9|?',
//     'Decode',
//   ])