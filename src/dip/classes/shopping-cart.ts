import { CartItemProtocol } from './interfaces/cart-item';
import { DiscountProtocol } from './interfaces/discount';
import { ShoppingCartProtocol } from './interfaces/shopping-cart';

// Uma classe é coesa quando suas funções utilizam seus atributos
// Se voltar muito em uma classe para readaptá-la é frequente, é um sinal de que há diferentes responsabilidades em um mesmo local

export class ShoppingCart implements ShoppingCartProtocol {
  private readonly _items: CartItemProtocol[] = [];

  // Sempre que for dependências, colocar readonly
  constructor(private readonly discount: DiscountProtocol) {}

  get items(): Readonly<CartItemProtocol[]> {
    return this._items;
  }

  addItem(item: CartItemProtocol): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  subtotal(): number {
    return +this._items // '+' converte para number
      .reduce((acc, product) => acc + product.price, 0)
      .toFixed(2); // toFixed retorna string
  }

  total(): number {
    return this.discount.calculate(this.subtotal());
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    this._items.length = 0;
    console.log('Carrinho de compras limpo.');
  }
}
