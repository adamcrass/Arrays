"use strict";

document.write["<h1> Test </h1>"];

const enemies = ["Goblin", "Orc", "Troll", "Dragon"];

const neutrals = ["Tree", "Rock", "Bush", "Water"];

console.log(enemies);
console.log(neutrals);

neutrals.push("Dirt");

console.log(neutrals);

enemies.pop("Troll");

console.log(enemies);

function writeItem() {
  document.write("<h1>Hello worlds</h1>");
}

writeItem();
