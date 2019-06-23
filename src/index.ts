import 'reflect-metadata';
import { container } from 'tsyringe';

import * as TicketRepository from './Ticket/TicketRepository';
import * as TicketUseCase from './Ticket/TicketUseCase';

container.register(TicketRepository.token, { useClass: TicketRepository.Impl });

const usecase = container.resolve(TicketUseCase.Impl);

while (usecase.buy()) {
  console.log('bought ticket');
}

console.log('ticket sold out!');

/*
 * use dummy
 */
console.log('------------------------------------');
container.register(TicketRepository.token, { useClass: TicketRepository.DummyImpl });
const dummyUsecase = container.resolve(TicketUseCase.Impl);
while (dummyUsecase.buy()) {
  console.log('bought dummy ticket');
}

console.log('dummy ticket sold out!');
