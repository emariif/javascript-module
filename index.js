// const { coffeeStock, isCoffeeMachineReady } = require('./state');
import { coffeeStock as coffee, isCoffeeMachineReady } from "./state.js";
import _ from 'lodash';

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

const myArray = [1, 2, 3, 4];
const sum = _.sum(myArray);

console.log(`mencoba lodash ${sum}`);