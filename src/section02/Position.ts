import { Distance } from '.'; // eslint-disable-line import/named

// よくある感じ
export type Position = { x: number; y: number };
// デフォルト値 原点
const defaultPosition: Position = { x: 0, y: 0 };
// 指定の座標が領域内にあるかどーか
// CheckInRegionやRegionBlockって名前ではない 関数も値だから
export type Region = (p: Position) => boolean;

// 初期化用
export const create: (props?: Partial<Position>) => Position = (props = {}) => ({
  ...defaultPosition,
  ...props,
});

// 更新用
export const set: (position: Position, to: Partial<Position>) => Position = (position, to) => ({
  ...position,
  ...to,
});

// 指定の座標が領域内かを返す
export const within: (position: Position, range: Distance) => boolean = ({ x, y }, range) =>
  Math.sqrt(x * x + y * y) <= range;
