const createChassis = () => {
    const newCar = {}
    // addwheels(newCar)
    // addEngine(newCar)
    // addSteeringWheel(newCar)
    // addDriveTrain(newCar)
    return newCar
}

const addwheels = (chassis) => {
    chassis.wheels = 4
    return chassis
}

const addEngine = (chassis) => {
    chassis.engine = "4.8L"
    return chassis
}

const addSteeringWheel = (chassis) => {
    chassis.steeringWheel = "Tilting"
    return chassis
}

const addDriveTrain = (chassis) => {
    chassis.driveTrain = "Two Wheel Drive"
    return chassis
}

let car = createChassis()
let chassis = addwheels(car)
let withEngine = addEngine(car)
let withSteeringWheel = addSteeringWheel(car)
let withDriveTrain = addDriveTrain(car)
console.log(car)