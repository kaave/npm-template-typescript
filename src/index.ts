import 'reflect-metadata';
import { container } from 'tsyringe';

import * as TicketRepository from '~/Ticket/TicketRepository';
import * as TicketUseCase from '~/Ticket/TicketUseCase';

TicketRepository.regist(container);

const usecase = TicketUseCase.create(container);
// usecase.ticketRepository.getStock() // can not access!
while (usecase.buy()) {
  console.log('bought ticket');
}

console.log('ticket sold out!');

/*
 * use dummy
 */
console.log('------------------------------------');
TicketRepository.regist(container, true);
const dummyUsecase = TicketUseCase.create(container);
while (dummyUsecase.buy()) {
  console.log('bought dummy ticket');
}

console.log('dummy ticket sold out!');
