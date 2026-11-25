"use strict";
// Interfaces serve almost the exact same purpose as ty aliases(with a slightly different syntax).
// we can use the to create reusable , moduler types that describes the shapes of objects
const pt = { x: 1, y: 2 };
const thomos = { id: 123, name: "manju", age: 26, nickname: "manju" };
thomos.name = "Manjunath L";
const thomos2 = { id: 123, name: "manju", age: 26, nickname: "manju", sayHi: () => {
        return "Hello";
    } };
console.log(thomos.id);
const productDetail = {
    name: "manju",
    price: 500,
    applyDiscount(amount) {
        const newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
};
console.log("discount:", productDetail.applyDiscount(4));
const elton = {
    name: "jummy",
    age: 6,
    bread: "bone pease",
    bard() {
        return "I will beat non weg";
    }
};
const chewy = {
    name: "sony",
    age: 4.5,
    bread: "LAB",
    bard() {
        return "Helo LAB";
    },
    job: "bomb"
};
console.log("chewy:", chewy);
