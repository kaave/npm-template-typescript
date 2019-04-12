type EnableKeys = 'capture' | 'once' | 'passive';

type ThirdVariable = boolean | { [key in EnableKeys]: boolean };

declare function addEventListener(event: string, run: () => void, type?: ThirdVariable): void;

addEventListener('foobar', () => {});
addEventListener('event', () => {}, true);
addEventListener('event2', () => {}, {});
addEventListener('event3', () => {}, {
  capture: true,
  once: false,
});

// エラーi
addEventListener('foobar', () => {}, 'string');
addEventListener('hoge', () => {}, {
  capture: true,
  once: false,
  excess: true,
});
