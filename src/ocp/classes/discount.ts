export abstract class Discount {
  protected discount: number = 0;

  calculate(total: number): number {
    const discountValue = (total * this.discount) / 100;
    return total - discountValue;
  }
}

export class NoDiscount extends Discount {}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount: number = 50;
}

export class TenPercentDiscount extends Discount {
  protected readonly discount: number = 10;
}
