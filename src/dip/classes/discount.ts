import { DiscountProtocol } from './interfaces/discount';

export abstract class Discount implements DiscountProtocol {
  discount: number = 0;

  calculate(subtotal: number): number {
    const discountValue = (subtotal * this.discount) / 100;
    const total = subtotal - discountValue;
    return total;
  }
}

export class NoDiscount extends Discount {}

export class FiftyPercentDiscount extends Discount {
  readonly discount: number = 50;
}

export class TenPercentDiscount extends Discount {
  readonly discount: number = 10;
}
