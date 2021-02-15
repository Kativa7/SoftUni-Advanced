class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if (this.vehicles.length < this.capacity) {
            this.vehicles.push({ carModel, carNumber, payed: false, });
            return `The ${carModel}, with a registration number ${carNumber}, parked.`

        } else {
            throw new Error('Not enough parking space.')
        }

    }

    removeCar(carNumber) {
        if (!this.vehicles.find(x => x.carNumber == carNumber)) {
            throw new Error("The car, you're looking for, is not found.")
        }
        let car = this.vehicles.find(x => x.carNumber == carNumber);

        if (car.payed == false) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        }

        let index = this.vehicles.indexOf(this.vehicles.find(x => x.carNumber == carNumber));
        this.vehicles.splice(index, 1);
        return `${carNumber} left the parking lot.`

    }

    pay(carNumber) {
        if (!this.vehicles.find(x => x.carNumber == carNumber)) {
            throw new Error(`${carNumber} is not in the parking lot.`)
        }
        if (this.vehicles.find(x => x.payed == true)) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }
        let car = this.vehicles.find(x => x.carNumber == carNumber);
        car.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`
    }

    getStatistics(carNumber) {
        let result = '';

        if (carNumber) {
            let car = this.vehicles.find(x => x.carNumber == carNumber);
            let model = car.carModel;
            result = `${model} == ${carNumber} - `
            if (car.payed == true) {
                result += 'Has payed';
            } else {
                result += 'Not payed';

            }

        } else {

            let emptySlots = this.capacity - this.vehicles.length;
            result += `The Parking Lot has ${emptySlots} empty spots left.`

            let sorted = this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel));
            sorted.forEach(x => {
                result += "\n";
                result += `${x.carModel} == ${x.carNumber} - `
                if (x.payed == true) {
                    result += 'Has payed';
                } else {
                    result += 'Not payed';

                }

            })



        }
        return result.trim();

    }

}

const ins = new Parking(10);
console.log(ins.addCar("Vivaro", "RKJ"));
console.log(ins.pay("RKJ"));
console.log(ins.removeCar("RKJ"));
console.log(ins.addCar("Toyota ", "rkkslj"));
console.log(ins.getStatistics("rkkslj"));
//console.log(ins.getStatistics());

// const parking = new Parking(10);
// const valueAddCar = parking.addCar('carModel', '1234');
// const valuePay = parking.pay('1234');
// const valueRemoveCar = parking.removeCar('1234');
