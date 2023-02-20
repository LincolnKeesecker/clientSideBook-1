const fillGasTank = (gallons) => {
    if (gallons > 15){
        console.log(`I filled the tank with ${gallons} of gas`)
    }
    else {
        console.log(`You should get gas soon since I could not`)
    }
}

fillGasTank(15)
fillGasTank(22)