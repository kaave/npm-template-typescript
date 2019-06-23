import { injectable, inject } from 'tsyringe';

import * as TicketRepository from './TicketRepository';

export interface IO {
  buy: () => boolean;
}

@injectable()
export class Impl implements IO {
  constructor(@inject(TicketRepository.token) private ticketRepository: TicketRepository.IO) {
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

export function create(ticketRepository: TicketRepository.IO): IO {
  return new Impl(ticketRepository);
}
