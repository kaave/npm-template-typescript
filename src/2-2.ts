type Speed2 = 'slow' | 'medium' | 'fast';

export function getSpeed(speed: Speed2): number {
  switch (speed) {
    case 'slow':
      return 10;
    case 'medium':
      return 50;
    case 'fast':
      return 200;
  }
  return 500;
}

// 使用例
const slowSpeed = getSpeed('slow');
const mediumSpeed = getSpeed('medium');
const fastSpeed = getSpeed('fast');

// エラー例
getSpeed('veryfast');
