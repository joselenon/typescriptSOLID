import { CartItemProtocol } from './interfaces/cart-item';

export class Product implements CartItemProtocol {
  constructor(
    public name: string,
    public price: number,
  ) {}
}
