/* eslint-disable default-case, consistent-return, no-unused-expressions */

type ActionTypes = 'increment' | 'decrement' | 'reset';
type NumberAction = {
  type: 'increment' | 'decrement';
  amount: number;
};

type ResetAction = {
  type: 'reset';
  value: number;
};

type Action = NumberAction | ResetAction;

const reducer = (state: number, action: Action) => {
  switch (action.type) {
    case 'increment':
      return state + action.amount;
    case 'decrement':
      return state - action.amount;
    case 'reset':
      return action.value;
  }
};

// 使用例
reducer(100, {
  type: 'increment',
  amount: 10,
}) === 110;
reducer(100, {
  type: 'decrement',
  amount: 55,
}) === 45;
reducer(500, {
  type: 'reset',
  value: 0,
}) === 0;

// エラー例
reducer(0, {
  type: 'increment',
  value: 100,
});
