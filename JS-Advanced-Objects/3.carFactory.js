function carFactory(input) {
//functions
function getEngine(power) {
    let engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }
    ]

    return engines.find(engine => engine.power >= power);
}
function getWheels(wheelsize) {
    let wheel = Math.floor(wheelsize) % 2 === 0 ? Math.floor(wheelsize) - 1 : Math.floor(wheelsize);
    return Array(4).fill(wheel,0,4)
}


    const {
        model,
        power,
        color,
        carriage,
        wheelsize
    } = input;

    let car = {
        model,
        engine: getEngine(power),
        carriage: {
            type: carriage,
            color,
        },
        wheels: getWheels(wheelsize),

    }
    return car
}



console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
))