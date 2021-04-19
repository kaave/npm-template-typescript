// https://qiita.com/kgtkr/items/2a8290d1b1314063a524

export type TypeEq<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;

export function assertType<_T extends true>() {}
export function assertNotType<_T extends false>() {}

// How to use

/*
 * OK
 */
assertType<TypeEq<1, 1>>();
assertNotType<TypeEq<{}, { x: 1 }>>();
assertNotType<TypeEq<1, 2>>();
assertNotType<TypeEq<1 | 2, 1>>();
assertNotType<TypeEq<1, never>>();
assertType<TypeEq<never, never>>();
assertNotType<TypeEq<1, any>>();
assertType<TypeEq<any, any>>();
assertNotType<TypeEq<1, unknown>>();
assertType<TypeEq<unknown, unknown>>();

type User = { name: string; age: number };
assertType<TypeEq<{ name?: string; age?: number }, Partial<User>>>();

/*
 * NG
 */
// assertType<TypeEq<1, 2>>();
// assertNotType<TypeEq<1, 1>>();
