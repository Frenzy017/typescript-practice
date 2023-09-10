// Tuples
//  They're array of fixed lengths and ordered with specific types - rigid arrays
var stuff = ["asd", 'asddsa', 'asdsad'];
//  Tuple represents exactly 3 numbers and length, anything else is invalid
// Order matters
var color = [255, 0, 255];
var goodRes = [200, "OK"];
// Type limitation
goodRes.push(123);
goodRes.pop();
// Enums
// They're set of named constants that we can reuse throughout our code
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED"; // 3
})(OrderStatus || (OrderStatus = {}));
var myStatus = OrderStatus.DELIVERED;
function isDelivered(status) {
    return status === OrderStatus.DELIVERED;
}
isDelivered(OrderStatus.RETURNED);
