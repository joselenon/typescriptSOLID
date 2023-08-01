// Exemplo de violação do princípio - subclasses retornando diferentes tipos

export abstract class Discount {
  protected discount: number = 0;

  calculate(subtotal: number): unknown {
    const discountValue = (subtotal * this.discount) / 100;
    const total = subtotal - discountValue;
    return total;
  }
}

export class NoDiscount extends Discount {}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount: number = 50;

  calculate(subtotal: number): unknown {
    return 'total'; // retornando tipo diferente de number
  }
}

export class TenPercentDiscount extends Discount {
  protected readonly discount: number = 10;

  calculate(subtotal: number): unknown {
    return false; // retornando tipo diferente de number
  }
}

// A incerteza do tipo de retorno de variável leva a necessidade de type guards
