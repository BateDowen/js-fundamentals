function heroesOfCode (input) {
    let heroesCount = Number(input.shift());
    let heroes = {};

    while (heroesCount > 0) {
        let line = input.shift().split(' ');
        let heroName = line[0];
        let hp = Number(line[1]);
        let mp = Number(line[2]);
        if (hp > 100) {
            hp = 100;
        }
        if (mp > 200) {
            mp = 200;
        }
        heroes[heroName] = [hp, mp];
        heroesCount--;
    }
    let [command, hero, amount, name] = input.shift().split(' - ');
    while (command !== "End") {
        switch(command){
            case "CastSpell":
                if (heroes.hasOwnProperty(hero)) {
                    let currHeroArr = heroes[hero];
                    let currMP = currHeroArr[1];
                    amount = Number(amount);
                    if (currMP >= amount) {
                        currMP -= amount;
                        currHeroArr[1] = currMP;
                        heroes[hero] = currHeroArr;
                        console.log(`${hero} has successfully cast ${name} and now has ${currMP} MP!`);
                    }else{
                        console.log(`${hero} does not have enough MP to cast ${name}!`);
                    }
                }
            break;

            case "TakeDamage":
                if (heroes.hasOwnProperty(hero)) {
                    let currHeroArr = heroes[hero];
                    let currHp = currHeroArr[0];
                    amount = Number(amount);
                    currHp -= amount;
                    if (currHp > 0) {
                        currHeroArr[0] = currHp;
                        heroes[hero] = currHeroArr;
                        console.log(`${hero} was hit for ${amount} HP by ${name} and now has ${currHp} HP left!`);
                    }else{
                        delete heroes[hero];
                        console.log(`${hero} has been killed by ${name}!`);
                    }
                }
            break;
            case "Recharge":
                if (heroes.hasOwnProperty(hero)) {
                    let currHeroArr = heroes[hero];
                    let currMP = currHeroArr[1];
                    let needMp = 200 - currMP;
                    amount = Number(amount);
                    currMP+=amount;
                    if (currMP > 200) {
                        currMP = 200;
                        amount = needMp;
                    }
                    currHeroArr[1] = currMP;
                    heroes[hero] = currHeroArr;
                    console.log(`${hero} recharged for ${amount} MP!`);
                }
            break;

            case "Heal":
                if (heroes.hasOwnProperty(hero)) {
                    let currHeroArr = heroes[hero];
                    let currHP = currHeroArr[0];
                    let needHp = 100 - currHP;
                    amount = Number(amount);
                    currHP+= amount;
                    if (currHP > 100) {
                        currHP = 100; 
                        amount = needHp;
                    }
                    currHeroArr[0] = currHP;
                    heroes[hero] = currHeroArr
                    console.log(`${hero} healed for ${amount} HP!`); 
                }
                break;
        }
        [command, hero, amount, name] = input.shift().split(' - ');
    }
    let heroesArr =Object.entries(heroes);
    let sorted = heroesArr.sort(sortHeroes)
     sorted = sorted.forEach(el => {
        console.log(el[0]);
        console.log(`HP: ${Math.floor(el[1][0])}`);
        console.log(`MP: ${Math.floor(el[1][1])}`);

    });
    function sortHeroes(heroA,herob) {
        let heroNameA =heroA[0];
        let heroNameB = herob[0];
        let heroPointsA = heroA[1];
        let heroPointsB = herob[1];
        let heroHPA = heroPointsA[0];
        let heroHPB = heroPointsB[0];
        if (heroHPA === heroHPB) {
            return heroNameA.localeCompare(heroNameB);
        }else{
            return heroHPB - heroHPA;
        }
    }
}
heroesOfCode([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
  ]
  )