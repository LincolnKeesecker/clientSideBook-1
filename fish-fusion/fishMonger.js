const { boatInventory } = require("./fishingBoat.js")

let boatStock = boatInventory()

const mongerInventory = () => {
    let mongerStock = []

    for (let fish of boatStock) {
        if (fish.amount > 10 && fish.price < 7.5) {
            mongerStock.push(fish)
        }
    }

    for (let fish of mongerStock) {
        fish.amount = 10
    }

    return mongerStock
}


module.exports = { mongerInventory }