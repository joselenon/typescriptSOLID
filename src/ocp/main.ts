/*
Open/Closed Principle
Entidades devem estar abertas para extensão, mas fechadas para modificação.

- Classes devem ser projetadas de forma que possam ser estendidas para adicionar novas funcionalidades sem que seja necessário modificar seu código-fonte existente
Ex: ao criar novas funcionalidades para uma classe, apenas adicionar novas subclasses mantendo classe original fechada para modificações
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
