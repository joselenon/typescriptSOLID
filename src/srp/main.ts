/*
Single responsability principle
Classes devem ter uma única responsabilidade, apenas um motivo para ser alterada

- Uma classe é coesa quando suas funções utilizam seus atributos
- Se voltar muito em uma classe para readaptá-la é frequente, é sinal de que há diferentes responsabilidades em um mesmo local
*/

import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { ShoppingCart } from './entities/shopping-cart';
import { Product } from './entities/product';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.912314515));
shoppingCart.addItem(new Product('Lápis', 1.59));

order.checkout();
console.log(order.orderStatus);
