const toyToFind = 2

const toys = [
    {
        id: 1,
        name: "PlayStation 5",
        maker: "Sony",
        price: 500,
        weight: 14.7,
        inStock: false,
    },
    {
        id: 2,
        name: "Xbox One",
        maker: "Microsoft",
        price: 500,
        weight: 9.8,
        inStock: true,
    },
    {
        id: 3,
        name: "Switch",
        maker: "Nintendo",
        price: 350,
        weight: 0.6,
        inStock: true,
    }
]


const steamDeck = {
    id: 4,
    name: "Steam Deck",
    maker: "Valve",
    price: 650,
    weight: 1.65,
    inStock: false,
}


const gameCube = {
    id: 5,
    name: "GameCube",
    maker: "Nintendo",
    price: 150,
    weight: 3.1,
    inStock: true,
}

toys.push(steamDeck, gameCube)

for (const toy of toys) {
    if (toy.id === 2) {
    toy.price = toy.price += toy.price*.05
    console.log(`The ${toy.maker} ${toy.name} costs ${toy.price}`)
    }
}
