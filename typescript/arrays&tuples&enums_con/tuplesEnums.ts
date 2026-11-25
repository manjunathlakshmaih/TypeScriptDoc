// Tuples are special type exclusive to typescript(they don't exist in JS)
// Tuples are arrays of Fixed lengths ansd ordered with specific types - like super rigid arrays

let tuples: [number, string, boolean, number];
tuples = [1,"manju",true,10]

const tupless: [number, string] = [10,"manju"];

type ApiReponse = [number, string];

const goodRes: ApiReponse = [200, "ok"];
// we can not reassign the tuple array it should be equal to exactly type of tuples array
// goodRes[0] = "200";

// Why is push() allowed on a tuple?

// A tuple enforces:

// Type of elements
// Order of elements
// Minimum required elements
goodRes.push(123)
goodRes.pop()
// But arrays in JavaScript naturally have methods like push(), pop(), splice(), etc.

// Since tuples are implemented as arrays under the hood, TypeScript allows:

const responses: ApiReponse[] = [[20, "manju"], [30, "Hello"]]

// =========================================
// Enums
// =========================================
// Enums allow us to define a set of named constants. we can give these constants numeric or string values.
// there's quite a few options when it comes to enums

enum OrderStatus {
    PENDING,
    SHIPPED,
    DELEVERED,
    RETURNED,
}

const myStatus = OrderStatus.DELEVERED;

function isDelivered(status: OrderStatus) {
    return status === OrderStatus.DELEVERED;
}

isDelivered(OrderStatus.RETURNED);

// enums can be string also not onlu number

enum Arrowkeys {
    UP ="up",
    DOWN = "down",
    num = 20
}

Arrowkeys.num;

// Note: An enum in TypeScript is used to represent a set of related constant values with meaningful names. Internally, 
// a normal enum is compiled into a JavaScript object that supports both name-to-value and value-to-name mapping. 
// A const enum is optimized away during compilation, and its values are inlined directly into the generated JavaScript, 
// resulting in smaller and faster code. For example, OrderStatus.SHIPPED becomes 1 at compile time without creating any enum object.

// Example
const enum OrderStatusss {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

function trackOrder(status: OrderStatusss) {
  if (status === OrderStatusss.SHIPPED) {
    console.log("Order is Shipped");
  }
}

trackOrder(OrderStatusss.SHIPPED);