// Практика 4

function ElectricalAppliance (name, power='360', socket='socket',madeIn= 'Китай'){
this.name = name,
this.power = power,
this.socket = socket,
this.madeIn = madeIn,
this.turnOnTurnOff = function(yes, no){
let question = `Вы хотите включить ${this.name} ?`
if (confirm(question)) yes();
else no();
function yes() {
  this.turnOn = 'True'
  alert(`Вы включили !` )
}

function no() {
  console.log(this.name);
  alert(`Вы выключили !`)
}
}

this.getName = function(){
console.log(`Название электроприбора ${this.name}`)
}
this.showEnergyEfficiency = function(){
let result = this.power/1000
console.log(`${this.name} расходует ${result} кВТ за час работы`)
}

}

function KitchenElectricalAppliances (name,effectiveSize,sound){
this.name = name,
this.effectiveSize = effectiveSize,
this.sound = sound,
this.getEffectiveSize = function(){
console.log(`Полезный объем ${this.name} состовляет ${this.effectiveSize} литров `)
}
this.getPower = function(power){
this.power = power,
console.log(`${this.power} мощьность ${this.name}`)
}

this.getInfoGross = function(height, width, deep){
this.height = height,
this.width = width,
this.deep = deep
console.group(`${this.name} info`)
console.log(`Высота : ${this.height} см`)
console.log(`Ширина : ${this.width} см`)
console.log(`Глубина : ${this.deep} см`)
console.groupEnd()
}

}

KitchenElectricalAppliances.prototype = new ElectricalAppliance ()

//
//
//
//const вishWasher = new KitchenElectricalAppliances('DWF-409/6 W','25', '20дБ')
//const hooverFil = new ElectricalAppliance('HvPhilips', '650')
//const coffeeMachine = new KitchenElectricalAppliances('coffeeMachine', '10.23', '40 дБ')
//console.log(hooverFil)
//console.log(coffeeMachine)
//coffeeMachine.showEnergyEfficiency()
//coffeeMachine.getPower('220')
//coffeeMachine.showEnergyEfficiency()
//coffeeMachine.getInfoGross.call(coffeeMachine, '1000','400','300')
//console.log(coffeeMachine.deep)
//console.log(coffeeMachine)
//coffeeMachine.getEffectiveSize()
////coffeeMachine.power('560')
//coffeeMachine.showEnergyEfficiency()
////coffeeMachine.turnOnTurnOff()
////hooverFil.turnOnTurnOff()
//hooverFil.turnOnTurnOff()
//вishWasher.getInfoGross('830', '500', '600')
//вishWasher.showEnergyEfficiency()
//console.log(вishWasher.power)
//coffeeMachine.getPower('560')
//coffeeMachine.showEnergyEfficiency()