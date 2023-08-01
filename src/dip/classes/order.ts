import { OrderStatusProtocol } from './interfaces/order-status';
import { CustomerOrderProtocol } from './interfaces/customer';
import { ShoppingCartProtocol } from './interfaces/shopping-cart';
import { MessagingProtocol } from './interfaces/messaging';
import { PersistencyProtocol } from './interfaces/persistency';

export class Order {
  private _orderStatus: OrderStatusProtocol = 'open';

  constructor(
    //private readonly cart: ShoppingCart, // Classe concreta
    private readonly cart: ShoppingCartProtocol, // Abstração

    //private readonly messaging: Messaging, // Classe concreta
    private readonly messaging: MessagingProtocol, // Abstração

    //private readonly persistency: Persistency, // Classe concreta
    private readonly persistency: PersistencyProtocol, // Abstração

    private readonly customer: CustomerOrderProtocol, // Abstração
  ) {}

  get orderStatus(): OrderStatusProtocol {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Carrinho está vazio.');
      return;
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage(
      `Pedido processado. \n Valor total: ${this.cart.total()}`,
    );
    this.persistency.saveOrder();
    this.cart.clear();

    console.log({
      cliente: this.customer.getName(),
      idn: this.customer.getIDN(),
    });
  }
}
