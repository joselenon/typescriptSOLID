export interface DiscountProtocol {
  discount: number;
  calculate(subtotal: number): number;
}
