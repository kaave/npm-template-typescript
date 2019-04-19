/* eslint-disable class-methods-use-this */

interface EventPayloads {
  start: {
    user: string;
  };
  stop: {
    user: string;
    after: number;
  };
  end: {};
}

type EventType<T> = keyof T;

class EventDischarger<E> {
  emit<T extends keyof E>(eventName: T, payload: E[T]) {
    // 省略
  }
}

// 使用例
const ed = new EventDischarger<EventPayloads>();
ed.emit('start', {
  user: 'user1',
});
ed.emit('stop', {
  user: 'user1',
  after: 3,
});
ed.emit('end', {});

// エラー例
ed.emit('start', {
  user: 'user2',
  after: 0,
});
ed.emit('stop', {
  user: 'user2',
});
ed.emit('foobar', {
  foo: 123,
});
