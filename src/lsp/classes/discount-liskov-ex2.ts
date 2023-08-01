// Exemplo de violação do princípio - comportamento do método pai sobrescrito por uma subclasse

export abstract class Discount {
  protected discount: number = 0;

  calculate(subtotal: number): number {
    const discountValue = (subtotal * this.discount) / 100;
    const total = subtotal - discountValue;
    return total;
  }
}

// Mudança de comportamento do método pai (errado por mais que seja funcional)
export class NoDiscount extends Discount {
  calculate(subtotal: number): number {
    return subtotal;
  }
}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount: number = 50;
}

export class TenPercentDiscount extends Discount {
  protected readonly discount: number = 10;
}
