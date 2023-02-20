

/* <section id="computer--1">
	<h1>Apple Macbook</h1>
	<div>Model: Pro</div>
	<div>Memory: 32 GB</div>
	<div>Hard drive space: 500 GB</div>
	<div>Processor speed: 2.4 Ghz</div>
</section> */

const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}

const computerHTMLMaker = (computerObject) => {
    const computerHTMLSection = 
        `<section id="computer--${computer.id}">
            <h1>${computer.manufacturer} ${computer.make}</h1>
            <div>Model: ${computer.model}</div>
            <div>Memory: ${computer.specs.memory} GB</div>
            <div>Hard drive space: ${computer.specs.hardDrive}</div>
            <div>Processor speed: ${computer.specs.processor} Ghz</div>
</section> `
    
    return computerHTMLSection
}
// console.log(computerHTMLMaker(computer))  If not needed, no need to define as variable

const stringReturned = computerHTMLMaker(computer)
console.log(stringReturned)