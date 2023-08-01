/*
Dependency inversion
Módulos de alto nível (ex: Shopping Cart) não devem depender de módulos de baixo nível (ex: Discount). Ambos devem depender de abstrações.

- Depender de abstrações e não de implementações
- Detalhes devem depender de abstrações e não o contrário
Ex:
*/

import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { ShoppingCart } from './classes/shopping-cart';
import { Product } from './classes/product';
import { NoDiscount } from './classes/discount';
import { IndividualCustomer } from './classes/customer';
import { MessagingProtocol } from './classes/interfaces/messaging';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const customer1 = new IndividualCustomer('jose', 'neto', '12345678908');

const shoppingCart = new ShoppingCart(noDiscount);
const persistency = new Persistency();

// const messaging = new Messaging();
// Exemplo de teste utilizando implementação com a abstração de Messaging
class MessagingMOCK implements MessagingProtocol {
  sendMessage(): void {
    console.log('mensagem enviada pelo MOCK');
  }
}
const messagingMOCK = new MessagingMOCK();

const order = new Order(shoppingCart, messagingMOCK, persistency, customer1);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.912314515));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(shoppingCart.total());

order.checkout();
console.log(order.orderStatus);
