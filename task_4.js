function Device(powerСonsumption) {
    this.powerСonsumption = powerСonsumption;
}
Device.prototype.getPowerСonsumption = function() {
    return this.powerСonsumption;
}

function Lamp(powerСonsumption, color) {
    this.powerСonsumption = powerСonsumption;
    this.color = color;
}
Lamp.prototype = new Device();

function Computer(powerСonsumption, operationSystem) {
    this.powerСonsumption = powerСonsumption;
    this.operationSystem = operationSystem;
}
Computer.prototype = new Device();

function Teapot(powerСonsumption, volume) {
    this.powerСonsumption = powerСonsumption;
    this.volume = volume;
}
Teapot.prototype = new Device();

const tableLamp = new Lamp(10, "red");
const gamingСomputer = new Computer(30, "windows");
const teapot = new Teapot(20, 2);

console.log("Общая потребляемая мощность приборов: " + getTotalPowerConsumption(tableLamp, gamingСomputer, teapot));

function getTotalPowerConsumption(...devices) {
    let result = 0;

    for(let device of devices) {
        result += device.getPowerСonsumption();
    }
    return result;
}
