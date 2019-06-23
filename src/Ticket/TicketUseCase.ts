import { injectable, inject, DependencyContainer } from 'tsyringe';

import * as TicketRepository from './TicketRepository';

export interface IO {
  buy: () => boolean;
}

@injectable()
class Impl implements IO {
  ticketRepository: TicketRepository.IO;

  constructor(@inject(TicketRepository.token) ticketRepository: TicketRepository.IO) {
    this.ticketRepository = ticketRepository;
  }

  buy(): boolean {
    const current = this.ticketRepository.getStock();
    if (current === 0) {
      return false;
    }

    this.ticketRepository.setStock(current - 1);
    return true;
  }
}

export function create(from: DependencyContainer) {
  return from.resolve<IO>(Impl);
}
