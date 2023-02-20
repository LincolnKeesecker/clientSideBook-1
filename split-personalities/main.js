const originalDisorderFormat = "Depression|$|Bipolar|$|Manic|$|Anxiety|$|Anorexia|$|Posttraumtic Stress|$|Seasonal Affective|$|Bulimia"
// const [firstDisorder, secondDisorder, thirdDisorder, fourthDisorder, fifthDisorder, sixthDisorder, seventhDisorder, eightDisorder] = 
const newDisorderFormat = originalDisorderFormat.split("|$|")

const disorders = newDisorderFormat.join("</div>\n<div>")

console.log(`<div>${disorders}</div>`)