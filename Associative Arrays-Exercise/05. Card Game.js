function cardGame(input) {
    let people = {};

    for(let hand of input){
        let [name, cards] = hand.split(': ');
        let arrOfCards = cards.split(', ');

        if (!people.hasOwnProperty(name)) {
            people[name] = [];
            for(let card of arrOfCards){
                if (!people[name].includes(card)) {
                    people[name].push(card);
                }
            }
        } else{
            for(let card of arrOfCards){
                if (!people[name].includes(card)) {
                    people[name].push(card);
                }
            }      
        }
    }

    let sorted = Object.entries(people);
    for(let cards of sorted){

        let result = 0;

        for(let card of cards[1]){
            let input = card.split('')
            let power = card[0];
            let type = card[1];
            if (input.length === 3) {
                 power = 10;
                 type = input[2];
            }
            
            
            switch(power){
                case "J":power = 11; break;
                case 'Q':power = 12; break;
                case 'K':power = 13; break;
                case 'A':power = 14; break;
            }
            switch(type){
                case "S":type = 4; break;
                case 'H':type = 3; break;
                case 'D':type = 2; break;
                case 'C':type = 1; break;
            }
             result += Number(power) * Number(type);
           }
           console.log(`${cards[0]}: ${result}`);

    }
    
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ])