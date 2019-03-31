type thirdVariable =
  | boolean
  | {
      capture: boolean;
      once: boolean;
      passive: boolean;
    };
declare function addEventListener(event: string, run: () => void, type?: thirdVariable): void;

// 使用例
addEventListener('foobar', () => {});
addEventListener('event', () => {}, true);
addEventListener('event2', () => {}, {});
addEventListener('event3', () => {}, {
  capture: true,
  once: false,
});

// エラー例
// addEventListener('foobar', () => {}, 'string');
// addEventListener('hoge', () => {}, {
//   capture: true,
//   once: false,
//   excess: true,
// });
