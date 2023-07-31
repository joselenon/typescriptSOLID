type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return +this._items // '+' converte para number
      .reduce((acc, product) => acc + product.price, 0)
      .toFixed(2); // toFixed retorna string
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Carrinho está vazio.');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(`Pedido processado. \n Valor total: ${this.total()}`);
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log('Mensagem enviada:', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso.');
  }

  clear(): void {
    this._items.length = 0;
    console.log('Carrinho de compras limpado.');
  }
}

const shoppingCartLegacy = new ShoppingCartLegacy();
shoppingCartLegacy.addItem({ name: 'Camiseta', price: 49.9 });
shoppingCartLegacy.addItem({ name: 'Caderno', price: 9.912314515 });
shoppingCartLegacy.addItem({ name: 'Lápis', price: 1.59 });

shoppingCartLegacy.checkout();
console.log(shoppingCartLegacy.orderStatus);
