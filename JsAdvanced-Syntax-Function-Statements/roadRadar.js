function roadRadar(speed, area) {
    let limits = {
        residentialLimit: 20,
        cityLimit: 50,
        interLimit: 90,
        motorwayLimit: 130,
    }
    
    let diff = 0;

    switch (area) {
        case 'motorway':
            if (speed <= limits.motorwayLimit) {
                console.log(`Driving ${speed} km/h in a ${limits.motorwayLimit} zone`);
            } else {
                diff = speed - limits.motorwayLimit;
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limits.motorwayLimit} - ${setStatus(limits.motorwayLimit, speed)}`);
            }

            break;
        case 'interstate':
            if (speed <= limits.interLimit) {
                console.log(`Driving ${speed} km/h in a ${limits.interLimit} zone`);
            } else {
                diff = speed - limits.interLimit;
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limits.interLimit} - ${setStatus(limits.interLimit, speed)}`);
            }

            break;
        case 'city':
            if (speed <= limits.cityLimit) {
                console.log(`Driving ${speed} km/h in a ${limits.cityLimit} zone`);
            } else {
                diff = speed - limits.cityLimit;
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limits.cityLimit} - ${setStatus(limits.cityLimit, speed)}`);
            }

            break;
        case 'residential':
            if (speed <= limits.residentialLimit) {
                console.log(`Driving ${speed} km/h in a ${limits.residentialLimit} zone`);
            } else {
                diff = speed - limits.residentialLimit;
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limits.residentialLimit} - ${setStatus(limits.residentialLimit, speed)}`);
            }
            break;
    }

    function setStatus(speedLimit, speed) {
        diff = speed - speedLimit;
        let status = "";
        if (diff <= 20) {
            status = "speeding";
        } else if (diff <= 40) {
            status = "excessive speeding"
        } else {
            status = "reckless driving ";
        }
        return status;
    }
}
roadRadar(160, 'motorway');