const add = (firstNumber, secondNumber) => {
    const sum = firstNumber + secondNumber

    return sum
}

const subtract = (firstNumber, secondNumber) => {
    const diff = firstNumber - secondNumber

    return diff
} 

const divide = (firstNumber, secondNumber) => {
    const quotient = firstNumber / secondNumber

    return quotient
}

const multiply = (firstNumber, secondNumber) => {
     const product = firstNumber * secondNumber

     return product
}

const square = (firstNumber, secondNumber) => {
    const squared = firstNumber * firstNumber

    return squared
}

// ----------------------------------------------------------------------

// let result = [add(5, 6),
// subtract(6, 5),
// divide(15, 5),
// multiply(10, 10),
// square(5, 5)]

// console.log(result)

// ----------------------------------------------------------------------

// A quarter of the animals on a farm have four legs.
// The remaining three quarters of the animals have two legs.
// If there are 60 legs overall, how many animals are there on the farm?
// (0.25x * 4) + (0.75x * 2) = 60

const solveProblem = () => {
    let totalNumberLegs = 60
    let fourLegs = multiply(0.25, 4)
    let twoLegs = multiply(0.75, 2)
    let combinedLegs = add(fourLegs, twoLegs)
    let totalAnimals = divide(totalNumberLegs, combinedLegs)
    return totalAnimals
}
console.log(solveProblem());