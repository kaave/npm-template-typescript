export interface IO {
  getStock: () => number;
  setStock: (n: number) => void;
}

export const token = 'TicketRepository';

let stock = 5;

export class Impl implements IO {
  getStock(): number {
    return stock;
  }

  setStock(newValue: number): void {
    stock = newValue;
  }
}

let dummyStock = 10;
export class DummyImpl implements IO {
  getStock(): number {
    return dummyStock;
  }

  setStock(newValue: number): void {
    dummyStock = newValue;
  }
}
