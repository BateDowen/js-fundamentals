function needForSpeed(input) {
    let numOfCars = Number(input.shift());
    let cars = {}
    while (numOfCars > 0) {
        let line = input.shift().split('|');
        let carName = line[0];
        let km = Number(line[1]);
        let fuel = Number(line[2]);

        cars[carName] = [km, fuel];
        numOfCars--;
    }
    
    while (input[0] != 'Stop') {
        
        let line = input.shift().split(' : ');
        if (line[0] === 'Drive') {
            let currCar = line[1]
            if (cars.hasOwnProperty(currCar)){
                let distance = Number(line[2]);
                let fuel = Number(line[3]);
                let currCarProperties = cars[line[1]];
                let carsKm = currCarProperties[0];
                let carsFuel = currCarProperties[1];
                if (carsFuel > fuel) {
                    carsKm += distance;
                    carsFuel -= fuel;
                    currCarProperties = [carsKm, carsFuel];
                    cars[currCar] = [carsKm, carsFuel];
                    console.log(`${currCar} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                }else{
                    console.log(`Not enough fuel to make that ride`);
                }
                if (carsKm >= 100000) {
                    console.log(`Time to sell the ${currCar}!`);
                    delete cars[currCar];
                }
            }
        }else if (line[0] === 'Refuel') {
            let currCar = line[1];
            if (cars.hasOwnProperty(currCar)) {
                let fuel = Number(line[2])
                let currCarProperties = cars[line[1]];
                let carsFuel = Number(currCarProperties[1]);
                let fuelNeed = 75 - carsFuel;
                carsFuel += fuel;
                if (carsFuel <= 75) {
                    console.log(`${currCar} refueled with ${fuel} liters`);
                }else {
                    carsFuel = 75;
                    console.log(`${currCar} refueled with ${fuelNeed} liters`);
                }
                cars[currCar][1] = carsFuel;

            }
        }else if (line[0] === 'Revert') {
            let currCar = line[1];
            if (cars.hasOwnProperty(currCar)) {
                let km = Number([line[2]]);
                let currCarProperties = cars[line[1]];
                let currCarKm = Number(currCarProperties[0]);
                currCarKm = Math.round(currCarKm - km)
                if (currCarKm > 10000) {
                    console.log(`${currCar} mileage decreased by ${km} kilometers`);
                }else{
                    currCarKm = 10000;
                }
                cars[currCar][0] = currCarKm;

            }
        }
    }
    let carsArr = Object.entries(cars);
    carsArr.forEach(el => {
        console.log(`${el[0]} -> Mileage: ${el[1][0]} kms, Fuel in the tank: ${el[1][1]} lt.`);
    })
}
needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ])