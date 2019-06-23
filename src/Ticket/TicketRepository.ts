import { DependencyContainer } from 'tsyringe';

export interface IO {
  getStock: () => number;
  setStock: (n: number) => void;
}

export const token = 'TicketRepository';

let stock = 5;

class Impl implements IO {
  getStock(): number {
    return stock;
  }

  setStock(newValue: number): void {
    stock = newValue;
  }
}

let dummyStock = 10;
class DummyImpl implements IO {
  getStock(): number {
    return dummyStock;
  }

  setStock(newValue: number): void {
    dummyStock = newValue;
  }
}

export function regist(to: DependencyContainer, isDummy = false) {
  to.register<IO>(token, { useClass: isDummy ? DummyImpl : Impl });
}
