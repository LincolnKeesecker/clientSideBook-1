const { mongerInventory } = require("./fishMonger.js")

let mongerStock2 = mongerInventory()

const fishMenu = (maxPrice) => {
    let restaurantStock = []
    // if maxPrice <= price point chef buys 50%
    for (let fish of mongerStock2) {
        if (fish.price <= maxPrice) {
            restaurantStock.push(fish)
        }
    }

    for (let fish of restaurantStock) {
        fish.amount /= 2
    }

    let allHTML = ``
    allHTML += `<h1>Menu</h1>`
    allHTML += `\n<article class="menu">\n`
    for (let fish of restaurantStock) {
        allHTML += `<h2>${fish.species}</h2>
        <section class="menu__item">${fish.species} Soup</section>
        <section class="menu__item">${fish.species} Sandwich</section>
        <section class="menu__item">Grilled ${fish.species}</section>`
    }
    allHTML += `\n</article>`

    return allHTML
}

module.exports = { fishMenu }
