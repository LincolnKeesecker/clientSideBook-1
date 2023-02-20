const add = (firstNumber, secondNumber) => {
    const sum = firstNumber + secondNumber
    return sum
}

const multiply = (firstNumber, secondNumber) => {
    const product = firstNumber * 2
    return product
}

let addResult = add(4, 14)
let multiplyResult = multiply(addResult)
console.log(multiplyResult)