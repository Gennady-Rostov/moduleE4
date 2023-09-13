function Device(name){
	this.property = 'Lighting device', 
	this.name = name
}

Device.prototype.getVatt = function(vatt){
		console.log(`The amount of energy consumed is ${vatt} vatts`)
	}

function ElectronicDevice(name, electronic){
	this.name = name,
	this.electronic = electronic
}

ElectronicDevice.prototype = new Device()

const table_lamp = new ElectronicDevice('table_lamp', 'iron');
const computer = new Device('computer');

table_lamp.getVatt(40)
computer.getVatt(200)

console.log(table_lamp)
console.log(computer)