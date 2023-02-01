let arrayVazio = [];
let arrayCheio = ['Saab', 'Volvo', 'BMW', 'Fiat', 'Volkswagen', 'GM', 'Hyundai'];

arrayCheio.shift();

arrayCheio.pop();

let a, rest;

[a, ...rest] = arrayCheio;

console.log(a);
console.log(rest);