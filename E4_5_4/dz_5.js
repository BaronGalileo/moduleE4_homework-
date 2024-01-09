//Практика 5

class ElectricalAppliance {
constructor (name, power='360', socket='socket',madeIn= 'Китай') {
this.name = name,
this.power = power,
this.socket = socket,
this.madeIn = madeIn,
this.turnOn = false,
this.turnOnTurnOff = function(yes, no){
let device = this.name
let questionOff = `Вы хотите включить ${device} ?`;
let questionOn = `Вы хотите выключить ${device} ?`;
if(this.turnOn){
    if (confirm(questionOn)) {
        no(device);
        this.turnOn = false
        }
    else {
    yes(device);
    this.turnOn = true
    }
}
else {
    if (confirm(questionOff)) {
    yes(device);
    this.turnOn = true}
    else {
    no(device);
    this.turnOn = false}
    }

function yes(device) {
  alert(`Вы включили ${device} !` )
}
function no(device) {
  alert(`Вы выключили ${device} !`)
}
return this.turnOn
}

this.getName = function(){
console.log(`Название электроприбора ${this.name}`)
}
this.showEnergyEfficiency = function(){
let result = this.power/1000
console.log(`${this.name} расходует ${result} кВТ за час работы`)
}
}
}


class KitchenElectricalAppliances extends ElectricalAppliance {
constructor (name,effectiveSize,sound){
super();
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
}

const вishWasher = new KitchenElectricalAppliances('DWF-409/6 W','25', '20дБ')
const hooverFil = new ElectricalAppliance('HvPhilips', '650')
const coffeeMachine = new KitchenElectricalAppliances('coffeeMachine', '10.23', '40 дБ')

console.log(hooverFil)
//console.log(coffeeMachine)
//coffeeMachine.showEnergyEfficiency()
//coffeeMachine.getPower('220')
//coffeeMachine.showEnergyEfficiency()
//coffeeMachine.getInfoGross.call(coffeeMachine, '1000','400','300')
//console.log(coffeeMachine.deep)
//console.log(coffeeMachine)
//coffeeMachine.getEffectiveSize()
console.log(coffeeMachine.power)
coffeeMachine.getPower('560')
//coffeeMachine.showEnergyEfficiency()
////coffeeMachine.turnOnTurnOff()
//hooverFil.turnOnTurnOff()
//console.log(hooverFil.name, hooverFil.turnOn)
//hooverFil.turnOnTurnOff()
//вishWasher.getInfoGross('830', '500', '600')
//вishWasher.showEnergyEfficiency()
//console.log(вishWasher.power)
//coffeeMachine.getPower('560')
//coffeeMachine.showEnergyEfficiency()
//hooverFil.turnOnTurnOff()
console.log(coffeeMachine.power)