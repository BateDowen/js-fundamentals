function gladiatorInventory (elements) {
    let firstEquipment = String(elements.slice(0, 1));
    let arrOffirtEquipment = firstEquipment.split(' ')
    elements.shift()
    for(let command of elements){
        let tokens = command.split(' ');
        let currentComand = tokens[0];
        let equipment = tokens[1];
        if (currentComand === "Buy") {
            let isIncludes = arrOffirtEquipment.includes(equipment);
            if (isIncludes === false) {
            arrOffirtEquipment.push(equipment);
            }
        }else if (currentComand === "Trash") {
            let elementToTrash = arrOffirtEquipment.indexOf(equipment);
            let isIncludes = arrOffirtEquipment.includes(equipment);
            if (isIncludes) {
            arrOffirtEquipment.splice(elementToTrash, 1);
            }
        }else if (currentComand === "Repair") {
            let elementToRepair = arrOffirtEquipment.indexOf(equipment);
            let isIncludes = arrOffirtEquipment.includes(equipment);
            if (isIncludes) {
                arrOffirtEquipment.splice(elementToRepair, 1);
                arrOffirtEquipment.push(equipment);   
            }
            
        }else if (currentComand === "Upgrade") {
            let arrayOfEqup = equipment.split('-');
            let elementToUpgrade = arrOffirtEquipment.indexOf(arrayOfEqup[0]);
            let isIncludes = arrOffirtEquipment.includes(arrayOfEqup[0]);
            if (isIncludes) {
                arrOffirtEquipment.splice
                (elementToUpgrade + 1,0,`${arrayOfEqup[0]}${':'}${arrayOfEqup[1]}`);     
            }
            
        }
    } console.log(arrOffirtEquipment.join(' '));
}
gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']);
gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V'])