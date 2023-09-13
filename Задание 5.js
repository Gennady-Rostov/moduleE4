class Device {

	constructor(options){
		this.name = options.name
		this.property = options.property
	}

	getVatt(vatt){
		console.log(`The amount of energy consumed is ${vatt} vatts`)
	}
}

class ElectronicDevice extends Device {

	constructor(options){
		super(options)
		this.electronic = options.electronic
	}
}

const table_lamp = new ElectronicDevice({
	name:'table_lamp',
	electronic:'lighting device'
})
const computer = new Device({
	name:'computer',
	property:'iron'
})

table_lamp.getVatt(40)
computer.getVatt(200)