/* eslint-disable default-case */

type Speed = 'slow' | 'medium' | 'fast';

// eslint-disable-next-line consistent-return
export function getSpeed(speed: Speed): number {
  switch (speed) {
    case 'slow':
      return 10;
    case 'medium':
      return 50;
    case 'fast':
      return 200;
  }
}

// 使用例
const slowSpeed = getSpeed('slow');
const mediumSpeed = getSpeed('medium');
const fastSpeed = getSpeed('fast');

// エラー例
getSpeed('veryfast');
