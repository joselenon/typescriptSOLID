/*
Liskov substitution principle
Estabele que, se S é uma subclasse de T, objetos do tipo T podem ser substituídos por objetos do tipo S sem alterar a correção do programa.
*/

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { ShoppingCart } from './classes/shopping-cart';
import { Product } from './classes/product';
import { NoDiscount } from './classes/discount';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();

const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.912314515));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(shoppingCart.total());

order.checkout();
console.log(order.orderStatus);
