const buyClay = () => {
    return {}
}

const makePottery = (newBowl) => {
    newBowl.shape = "Bowl"

    return newBowl
}

const bisqueFire = (newBowl) => {
    newBowl.readyForGlazing = true
    
    return newBowl
}

const glazePottery = (newBowl) => {
    if (newBowl.readyForGlazing === true) {
        newBowl.glazed = "Midnight Blue"
        return newBowl
    } else {
        console.log(`Make sure you bisque fire the pottery before you glaze it.`)
    }
}

const finalFiring = (newBowl, temperature) => {
    if (temperature > 1200) {
        newBowl.cracked = true
    } else {
        newBowl.cracked = false
    }

    return newBowl    
}

let newBowl = buyClay()
makePottery(newBowl)
bisqueFire(newBowl)
glazePottery(newBowl)
finalFiring(newBowl)
console.log(newBowl)