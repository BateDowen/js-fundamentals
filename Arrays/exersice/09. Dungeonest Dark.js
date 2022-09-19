function solve(arr) {
    let array = arr;
    let health = 100;
    let coins = 0;
    let arrString = array.toString(arr);
    let neededArr = arrString.split("|");
    let neededArrL = neededArr.length;
    for(let i = 0; i < neededArrL; i++){
        let itemOrMonster = neededArr[i].split(' ');
        let itemOrMonster2 = itemOrMonster[0].split(' ');
        let itemOrMonster2Str = itemOrMonster2.toString()
        let points = itemOrMonster[1].split(' ')
        if (itemOrMonster2Str === "potion") {
            let oldHealth = health
            health += Number(points);
            if (health > 100) {
                health = 100;
            }
            console.log(`You healed for ${health - oldHealth} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if (itemOrMonster2Str === "chest") {
            coins += Number(points);
            console.log(`You found ${Number(points)} coins.`);
        } else {
            health -= Number(points);
            if (health <= 0) {
                console.log(`You died! Killed by ${itemOrMonster2}.`);
                console.log(`Best room: ${i+1}`);
                return;
            }
            console.log(`You slayed ${itemOrMonster2}.`);
        }

    }
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
    
}
solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])