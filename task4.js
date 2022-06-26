const Device = function (workStatePower) {
    this.isWorking = false;
    this.workStatePower = workStatePower;
}

Device.prototype.switchOn = function () {
    this.isWorking = true;
}

Device.prototype.switchOff = function () {
    this.isWorking = false;
}

Device.prototype.getPower = function () {
    return this.isWorking ? this.workStatePower : 0;
}

const Lamp = function (workStatePower) {
    this.workStatePower = workStatePower;
}

Lamp.prototype = new Device();
Lamp.prototype.getLight = function () {
    return this.isWorking ? "yellow" : "none";
}

Lamp.prototype.toString = function() {
    return `Lamp is ${this.isWorking ? "on" : "off"}, light is ${this.getLight()}, requred power is ${this.getPower()}w`
}

const Computer = function (workStatePower, inactivePower) {
    this.workStatePower = workStatePower;
    this.inactivePower = inactivePower;
    this.rebootCount = 0;
}

Computer.prototype = new Device();
Computer.prototype.reboot = function() {
    if (this.isWorking) {
        this.rebootCount += 1;
    } 
}

Computer.prototype.getPower = function () {
    return this.isWorking ? this.workStatePower : this.inactivePower;
}

Computer.prototype.toString = function() {
    return `System ${this.isWorking ? "online" : "offline"}, reboot count is ${this.rebootCount}, requred power is ${this.getPower()}w`
}


let lamp1 = new Lamp(35);
let lamp2 = new Lamp(60);
let comp = new Computer(300, 5);


lamp1.switchOn();
console.log(lamp1.toString());
console.log(lamp2.toString());

comp.reboot();
console.log(comp.toString());
comp.switchOn();
comp.reboot();
console.log(comp.toString());

class Programmer {
    constructor() {
        this.canBeProudOfThis = true;
    }
}
