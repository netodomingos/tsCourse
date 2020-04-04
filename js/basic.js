"use strict";
class Costumer {
    constructor(name) {
        this.name = name;
    }
    announce() {
        return "Hello, " + this.name;
    }
}
let firstCostumer = new Costumer('Neto');
let newMessag = firstCostumer.announce();
