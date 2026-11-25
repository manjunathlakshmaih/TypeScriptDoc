// Interfaces serve almost the exact same purpose as ty aliases(with a slightly different syntax).
// we can use the to create reusable , moduler types that describes the shapes of objects

interface Point {
    x: number;
    y: number;
}

const pt: Point = {x:1, y:2};

// readonly and optional
interface Person {
    readonly id: number;
    name:string;
    age: number;
    nickname ?: string;
}

const thomos: Person = {id:123, name:"manju", age:26, nickname:"manju"};

thomos.name = "Manjunath L"
// thomos.id = 1234;

// =====================
// Iterface Methods
// =====================

interface Person2 {
    readonly id: number;
    name:string;
    age: number;
    nickname ?: string;
    // sayHi: () => string;
    sayHi(): string;
}

const thomos2: Person2 = {id:123, name:"manju", age:26, nickname:"manju", sayHi: () => {
    return "Hello"
}};

console.log(thomos.id);

// Iterface Method Parameters
// ==========================

interface Producted {
    name:string;
    price: number;
    applyDiscount(discount: number): number;
}

const productDetail: Producted = {
    name:"manju",
    price:500,
    applyDiscount(amount: number) {
        const newPrice = this.price * (1-amount);
        this.price = newPrice;
        return this.price;
    }
}

console.log("discount:", productDetail.applyDiscount(4));

// Reopening Interface
// ===================

interface Dog {
    name: string;
    age: number;
}

interface Dog {
    bread: string;
    bard(): string;
}

const elton: Dog = {
    name:"jummy",
    age: 6,
    bread: "bone pease",
    bard() {
        return "I will beat non weg";
    }
}

// Extending Interfaces
// ====================
interface ServiceDog extends Dog {
    job: "drug sniffer" | "bomb" |"jumy";
}

const chewy: ServiceDog = {
    name:"sony",
    age:4.5,
    bread: "LAB",
    bard() {
        return "Helo LAB";
    },
    job: "bomb"
}

console.log("chewy:", chewy);

// Multiple Extending Interfaces
// ====================

interface Person {
    name: string;
}

interface Employee {
    readonly id: number,
    email: string
}

