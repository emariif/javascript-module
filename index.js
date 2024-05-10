// const { coffeeStock, isCoffeeMachineReady } = require('./state');
import { coffeeStock as coffee, isCoffeeMachineReady } from "./state.js";

const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
}

displayStock(coffee)
console.log(`jumlah gram tersedia kopi robusta adalah ${coffee.robusta}`)

console.log(isCoffeeMachineReady);
const makeCoffee = (type, miligrams) => {
    if (coffee[type] >= miligrams) {
        console.log('Kopi berhasil dibuat');
    } else {
        console.log('Biji Kopi Habis');
    }
}

makeCoffee('robusta', 80);