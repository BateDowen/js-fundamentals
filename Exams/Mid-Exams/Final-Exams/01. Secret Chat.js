function secretChat(input) {
    let message = input.shift();
    let coommandParser = {
        "InsertSpace": (message, index) => {
            let indexNum = Number(index);
            return message.substring(0,indexNum) + " " + message.substring(indexNum, message.length);
        },
        "Reverse": (message, string) =>{
            let reverseStr = string.split('').reverse().join('');
            if (new RegExp(string, "g").exec(message)) {
                return message.replace(new RegExp(string, "g"), reverseStr);  
            }else{
                console.log(`error`);
            }
          
        },
        "ChangeAll":(message, str, replacement) => {
            if (message.match(new RegExp(str, "g"))) {
              return  message.replace((new RegExp(str, "g")), replacement)
                
            }
            
        }
        
    }
    input.forEach(line => {
        if (line !== "Reveal") {
            let [command, ...tokens] = line.split(":|:");
            let oldMessage = message;
            message = coommandParser[command](message, ...tokens);

            if (oldMessage !== message) {
                console.log(message);
            }
        }
    });
    console.log(`You have a new text message: ${message}`);
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ])