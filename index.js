"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var Order = /** @class */ (function () {
    function Order(productName, quantity, price, orderId) {
        this.productName = productName;
        this.quantity = quantity;
        this.price = price;
        this.orderId = orderId;
    }
    Order.prototype.track = function () {
        return "Order Id: ".concat(this.orderId, "\n ProductName: ").concat(this.productName, "\n Quantity: ").concat(this.quantity, "\n Price: ").concat(this.price);
    };
    return Order;
}());
var OrderTracking = /** @class */ (function () {
    function OrderTracking() {
        this.orders = [];
    }
    OrderTracking.prototype.trackOrder = function (orderId) {
        var found;
        for (var _i = 0, _a = this.orders; _i < _a.length; _i++) {
            var order = _a[_i];
            if (order.orderId === orderId) {
                found = order;
                break;
            }
        }
        if (found) {
            console.log(found.track());
        }
        else {
            console.log('Order not found.');
        }
    };
    return OrderTracking;
}());
var tracker1 = new OrderTracking();
var particularOrder = new Order('product A', 2, 100, 'ORDER-10');
tracker1['orders'].push(particularOrder);
//userInput
//provides methods to read input from the user which takes an object.
//
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//question method=> to prompt the user for input
rl.question('Enter orderId: ', function (userInput) {
    tracker1.trackOrder(userInput);
    rl.close();
});
