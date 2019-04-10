type Predicate<T> = (val: T) => boolean;
const myFilter = <T>(arr: T[], predicate: Predicate<T>): T[] => arr.filter(predicate);

// 使用例
const res = myFilter([1, 2, 3, 4, 5], num => num % 2 === 0);
const res2 = myFilter(['foo', 'hoge', 'bar'], str => str.length >= 4);

// エラー例
// myFilter([1, 2, 3, 4, 5], str => str.length >= 4);
