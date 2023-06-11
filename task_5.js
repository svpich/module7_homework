class Device {
    constructor(powerСonsumption) {
        this.powerСonsumption = powerСonsumption;
    }
    getPowerСonsumption() {
        return this.powerСonsumption;
    }
}

class Lamp extends Device {
    constructor(powerСonsumption, color) {
        super(powerСonsumption);
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}

class Computer extends Device {
    constructor(powerСonsumption, operationSystem) {
        super(powerСonsumption);
        this.operationSystem = operationSystem;
    }
    getOperationSystem() {
        return this.operationSystem;
    }
}

class Teapot extends Device {
    constructor(powerСonsumption, volume) {
        super(powerСonsumption);
        this.volume = volume;
    }
    getVolume() {
        return this.volume;
    }
}

const tableLamp = new Lamp(10, "red")
const gamingСomputer = new Computer(30, "windows");
const teapot = new Teapot(20, 2)

console.log("Общая потребляемая мощность приборов: " + getTotalPowerConsumption(tableLamp, gamingСomputer, teapot));

function getTotalPowerConsumption(...devices) {
    let result = 0;

    for(let device of devices) {
        result += device.getPowerСonsumption();
    }
    return result;
}
