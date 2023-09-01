"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
// Step 2: Create Some Classes
class Item {
    constructor(_name, _price, _description, _id = (0, uuid_1.v4)()) {
        this._name = _name;
        this._price = _price;
        this._description = _description;
        this._id = _id;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
}
class User {
    constructor(_name, _age, _cart = [], _id = (0, uuid_1.v4)()) {
        this._name = _name;
        this._age = _age;
        this._cart = _cart;
        this._id = _id;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get cart() {
        return this._cart;
    }
    set cart(value) {
        this._cart = value;
    }
    // Step 3: Create some methods
    addToCart(item) {
        this.cart.push(item);
    }
    removeFromCart(item) {
        const indexOfItem = this.cart.indexOf(item);
        if (indexOfItem > -1) {
            this.cart.splice(indexOfItem, 1);
        }
    }
    removeQuantityFromCart(item, quantity) {
        let i = 0;
        while (i < this.cart.length && quantity > 0) {
            if (this.cart[i] === item) {
                this.cart.splice(i, 1);
                quantity -= 1;
            }
            else {
                ++i;
            }
        }
    }
    cartTotal() {
        let cartTotal = 0;
        for (let item of this.cart) {
            cartTotal += item.price;
        }
        console.log(cartTotal);
    }
    printCart() {
        console.log(`${this.name}'s cart:`);
        for (let item of this.cart) {
            console.log(`${item.name} - ${item.price}`);
        }
    }
}
class Shop {
    constructor(_items = []) {
        this._items = _items;
        this.items.push(new Item('iPhone', 699, 'Cellphone'));
        this.items.push(new Item('iPad', 799, 'Tablet'));
        this.items.push(new Item('Macbook Pro', 1599, 'Laptop'));
        this.items.push(new Item('iMac', 1899, 'Computer'));
    }
    get items() {
        return this._items;
    }
    set items(value) {
        this._items = value;
    }
}
// Step 4: Create Driver Code to emulate a front end user
const thatAnnoyingWineShop = new Shop();
const carlos = new User('Carlos', 31);
const kristina = new User('Kristina', 36);
console.log('-----------------------');
console.log(thatAnnoyingWineShop.items);
console.log('-----------------------');
carlos.addToCart(thatAnnoyingWineShop.items[1]);
carlos.addToCart(thatAnnoyingWineShop.items[2]);
carlos.addToCart(thatAnnoyingWineShop.items[3]);
carlos.printCart();
console.log('-----------------------');
kristina.addToCart(thatAnnoyingWineShop.items[2]);
kristina.addToCart(thatAnnoyingWineShop.items[3]);
kristina.addToCart(thatAnnoyingWineShop.items[3]);
kristina.addToCart(thatAnnoyingWineShop.items[3]);
kristina.printCart();
console.log('-----------------------');
kristina.removeFromCart(thatAnnoyingWineShop.items[2]);
kristina.printCart();
console.log('-----------------------');
kristina.removeQuantityFromCart(thatAnnoyingWineShop.items[3], 2);
kristina.printCart();
console.log('-----------------------');
console.log('-----------------------');
kristina.cartTotal();
console.log('-----------------------');
