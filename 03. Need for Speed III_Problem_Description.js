function NeedFOrSpeed(params) {
    let ObjCar = {}
    let nuberOfCars = params.shift();
    for (let i = 1; i <= nuberOfCars; i++) {
        let command = params.shift().split('|');
        let carBrand = command[0];
        let milleage = Number(command[1]);
        let fuel = Number(command[2]);
        ObjCar[carBrand] = {
            milleage: milleage,
            fuel: fuel
        }
    }
    let commandNext = params.shift();
    while (commandNext != 'Stop') {
        commandNext = commandNext.split(' : ')
        if (commandNext[0] == 'Drive') {
            let brand = commandNext[1]
            let toBeDriven = Number(commandNext[2])
            let toHasFuel = Number(commandNext[3])
            if (ObjCar[brand].fuel > toHasFuel) {
                ObjCar[brand].fuel -= toHasFuel
                ObjCar[brand].milleage += toBeDriven
                console.log(`${brand} driven for ${toBeDriven} kilometers. ${toHasFuel} liters of fuel consumed.`);
                if (ObjCar[brand].milleage >= 100000) {
                    console.log(`Time to sell the ${brand}!`);
                    delete ObjCar[brand]
                }
            } else {
                console.log(`Not enough fuel to make that ride`);
            }
        }
        else if (commandNext[0] == 'Refuel') {
            let brand = commandNext[1]
            let toBeFueled = Number(commandNext[2])
            let test = ObjCar[brand].fuel + toBeFueled
            if (test > 75) {
                toBeFueled = 75 - ObjCar[brand].fuel
                ObjCar[brand].fuel = 75
                console.log(`${brand} refueled with ${toBeFueled} liters`);
            } else {
                ObjCar[brand].fuel += toBeFueled
                console.log(`${brand} refueled with ${toBeFueled} liters`);
            }
        }
        else if (commandNext[0] == 'Revert') {
            let brand = commandNext[1];
            let revetKM = Number(commandNext[2]);
            ObjCar[brand].milleage -= revetKM;
            if (ObjCar[brand].milleage < 10000) {
                ObjCar[brand].milleage = 10000
            } else {
                console.log(`${brand} mileage decreased by ${revetKM} kilometers`);
            }
        }
        commandNext = params.shift();
    }
    let workArr = Object.entries(ObjCar)
    let sorted = workArr.sort((a, b) => {
        if (b[1].milleage == a[1].milleage) {
            return a[0].localeCompare(b[0]);
        }
        else {
            return b[1].milleage - a[1].milleage;
        }
    })


        for (const kvp of sorted) {
            console.log(`${kvp[0]} -> Mileage: ${kvp[1].milleage} kms, Fuel in the tank: ${kvp[1].fuel} lt.`);
        }
    }
NeedFOrSpeed(['4', 'Lamborghini Veneno|11111|74', 'Bugatti Veyron|12345|67', 'Koenigsegg CCXR|67890|12',
        'Aston Martin Valkryie|99900|50',

        'Drive : Koenigsegg CCXR : 382 : 82', 'Drive : Aston Martin Valkryie : 99 : 23',
        'Drive : Aston Martin Valkryie : 2 : 1', 'Refuel : Lamborghini Veneno : 40', 'Revert : Bugatti Veyron : 2000',

        'Stop'
    ])