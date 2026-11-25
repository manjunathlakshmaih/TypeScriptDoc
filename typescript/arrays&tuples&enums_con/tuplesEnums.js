"use strict";
// Tuples are special type exclusive to typescript(they don't exist in JS)
// Tuples are arrays of Fixed lengths ansd ordered with specific types - like super rigid arrays
let tuples;
tuples = [1, "manju", true, 10];
const tupless = [10, "manju"];
const goodRes = [200, "ok"];
// we can not reassign the tuple array it should be equal to exactly type of tuples array
// goodRes[0] = "200";
// Why is push() allowed on a tuple?
// A tuple enforces:
// Type of elements
// Order of elements
// Minimum required elements
goodRes.push(123);
goodRes.pop();
// But arrays in JavaScript naturally have methods like push(), pop(), splice(), etc.
// Since tuples are implemented as arrays under the hood, TypeScript allows:
const responses = [[20, "manju"], [30, "Hello"]];
// =========================================
// Enums
// =========================================
// Enums allow us to define a set of named constants. we can give these constants numeric or string values.
// there's quite a few options when it comes to enums
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELEVERED"] = 2] = "DELEVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
const myStatus = OrderStatus.DELEVERED;
function isDelivered(status) {
    return status === OrderStatus.DELEVERED;
}
isDelivered(OrderStatus.RETURNED);
// enums can be string also not onlu number
var Arrowkeys;
(function (Arrowkeys) {
    Arrowkeys["UP"] = "up";
    Arrowkeys["DOWN"] = "down";
    Arrowkeys[Arrowkeys["num"] = 20] = "num";
})(Arrowkeys || (Arrowkeys = {}));
Arrowkeys.num;
function trackOrder(status) {
    if (status === 1 /* OrderStatusss.SHIPPED */) {
        console.log("Order is Shipped");
    }
}
trackOrder(1 /* OrderStatusss.SHIPPED */);
