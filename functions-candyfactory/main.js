const buyChocolate = () => {
    return {property: "Milk Chocolate"}
}

const addFlavoring = (candy) => {
    candy.flavoring = "Mint"

    return candy
}

const makeBarkMixture = (candy) => {
    if (candy.flavoring === "Mint") {
        candy.mixed = true
    } else {
        candy.mixed = false
    }

    return candy
}

const bakeCandy= (candy) => {
    if (candy.mixed === true) {
        candy.baked = true
    } else {
        candy.baked = false
    }

    return candy
}

const breakBark= (candy) => {
    if (candy.baked === true ) {
        let newArr = []
        for (let i = 0; i < 7; i++){
            newArr.push(`${candy.flavoring} Chocolate Bark Piece`)

        }
    return newArr
    }
}
let candy = buyChocolate()
addFlavoring(candy)
makeBarkMixture(candy)
bakeCandy(candy)
console.log(breakBark(candy))