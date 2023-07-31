import { CartItem } from './interfaces/cart-item';

// Uma classe é coesa quando suas funções utilizam seus atributos
// Se voltar muito em uma classe para readaptá-la é frequente, é um sinal de que há diferentes responsabilidades em um mesmo local

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

  get items(): Readonly<CartItem[]> {
    return this._items;
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

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    this._items.length = 0;
    console.log('Carrinho de compras limpo.');
  }
}
