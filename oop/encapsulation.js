// Menyembunyikan data adalah bagian kunci dari encapsulation.

class CoffeMachine {
  #temperature = 90;
  constructor(waterAmount) {
    this.waterAmount = waterAmount;
    this.#temperature = this.#defaultTemperature()
  }

  set temperature(temperature) {
    console.log("tidak dapat di ubah");
  }

  get temperature() {
    return this.#temperature;
  }

  #defaultTemperature(){
    return 90
  }
}

const coffee = new CoffeMachine(100);
console.log("sebelum di ubah", coffee.temperature);
coffee.temperature = 60;
console.log("setelah di rubah", coffee.temperature);
