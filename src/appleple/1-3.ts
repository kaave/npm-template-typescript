type IsPositiveFunc2 = (num: number) => boolean;

export const isPositive: IsPositiveFunc2 = num => num >= 0;

// 使用例
isPositive(5);

// エラー例
isPositive('foo');
const res: number = isPositive(123);
