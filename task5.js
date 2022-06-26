class Device {
    constructor(workStatePower) {
        this.isWorking = false;
        this.workStatePower = workStatePower;
    }
    switchOn() {
        this.isWorking = true;
    }
    switchOff() {
        this.isWorking = false;
    }
    getPower() {
        return this.isWorking ? this.workStatePower : 0;
    }
}

class Lamp extends Device {
    constructor(workStatePower) {
        super(workStatePower);
    }
    getLight() {
        return this.isWorking ? "yellow" : "none";
    }
    toString() {
         return `Lamp is ${this.isWorking ? "on" : "off"}, light is ${this.getLight()}, requred power is ${this.getPower()}w`
    }
}

class Computer extends Device {
    constructor(workStatePower, inactivePower) {
        super(workStatePower);
        this.inactivePower = inactivePower;
        this.rebootCount = 0;    
    }
    reboot() {
        if (this.isWorking) {
            this.rebootCount += 1;
        } 
    }
    getPower() {
        return this.isWorking ? this.workStatePower : this.inactivePower;
    }
    toString() {
        return `System ${this.isWorking ? "online" : "offline"}, reboot count is ${this.rebootCount}, requred power is ${this.getPower()}w`
    }
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
