import { CartItemProtocol } from './cart-item';

export interface ShoppingCartProtocol {
  items: Readonly<CartItemProtocol[]>; // getter (atributo da classe)
  addItem(item: CartItemProtocol): void;
  removeItem(index: number): void;
  subtotal(): number;
  total(): number;
  isEmpty(): boolean;
  clear(): void;
}
