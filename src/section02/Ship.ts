import { Distance } from '.'; // eslint-disable-line import/named
import * as Position from './Position';

type Region = Position.Region;

// よくある感じ
export type Ship = {
  position: Position.Position;
  firingRange: Distance;
  unsafeRange: Distance;
};

// デフォルト値
const defaultShip: Ship = { position: Position.create(), firingRange: 0, unsafeRange: 0 };

// 初期化用
export const create: (props: Partial<Ship>) => Ship = props => ({ ...defaultShip, ...props });

// 更新用
export const set: (position: Ship, to: Partial<Ship>) => Ship = (position, to) => ({
  ...position,
  ...to,
});

const minus = (current: Position.Position, target: Position.Position): Position.Position =>
  Position.create({ x: current.x - target.x, y: current.y - target.y });
const length = ({ x, y }: Position.Position): number => Math.sqrt(x * x + y * y);

// 砲撃可能か
export const canEngage = (myShip: Ship, target: Ship, friendly: Ship): boolean => {
  // 標的が砲撃可能圏内かどうか判定
  const targetDistance = length(minus(target.position, myShip.position));
  if (targetDistance > myShip.firingRange || myShip.unsafeRange >= targetDistance) return false;

  // 友軍が領域内にいないか判定
  const friendlyDistance = length(minus(friendly.position, target.position));
  if (myShip.unsafeRange >= friendlyDistance) return false;

  return true;
};

// 指定の半径から指定のポイントが領域内かどうか判定
export const circle = (radius: Distance): Region => (point: Position.Position) => length(point) <= radius;
// ↑から原点を指定できるように
export const circle2 = (radius: Distance, center: Position.Position): Region => (point: Position.Position) =>
  length(minus(point, center)) <= radius;
// ↑が複雑なので、単純に移動させる関数を作る
export const shift = (region: Region, offset: Position.Position): Region => point => region(minus(point, offset));
// こんな感じで、反転させるのも楽
export const invert = (region: Region): Region => point => !region(point);
