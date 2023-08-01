/*
Interface segregation principle
Clientes não devem ser forçados a depender de protocolos (types, interfaces, membros abstratos) que não utilizam

Ex: É criado um type para cliente com chaves 'nome, cpf, cnpj'. Nem todo cliente utilizará cpf ou cnpj, portanto, serão forçados a ter propriedades que não deveriam ter
*/

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { ShoppingCart } from './classes/shopping-cart';
import { Product } from './classes/product';
import { NoDiscount } from './classes/discount';
import { IndividualCustomer } from './classes/customer';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const customer1 = new IndividualCustomer('jose', 'neto', '12345678908');

const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency, customer1);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.912314515));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(shoppingCart.total());

order.checkout();
console.log(order.orderStatus);
