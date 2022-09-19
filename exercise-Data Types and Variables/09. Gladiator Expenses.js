function gladiatorExpenses(lostFightsCount,helmetPrice,swordPrice,shieldPrice,armorPrice) {
    
    let totalExpences = 0;
    for(let i = 1; i <= lostFightsCount; i++){
    
        if (i % 2 === 0) {
            totalExpences += helmetPrice;
        }
        if (i % 3 === 0) {
            totalExpences += swordPrice;
        } 
        if (i % 6 === 0) {
            totalExpences += shieldPrice;
        }
        if (i % 12 === 0) {
            totalExpences += armorPrice;
        }
        
        
    }
    console.log(`Gladiator expenses: ${totalExpences.toFixed(2)} aureus`);
}
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200)