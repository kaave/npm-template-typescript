"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapErr = exports.map = exports.chainErr = exports.chain = exports.unwrap = exports.unwrapOr = exports.unwrapErr = exports.unwrapOk = exports.isEveryOk = exports.isErr = exports.isOk = exports.err = exports.ok = void 0;
const ok = (value) => ({ _type: 'ok', _value: value });
exports.ok = ok;
const err = (error) => ({ _type: 'err', _error: error });
exports.err = err;
const isOk = (r) => r._type === 'ok';
exports.isOk = isOk;
const isErr = (r) => !exports.isOk(r);
exports.isErr = isErr;
const isEveryOk = (t) => t.every((r) => exports.isOk(r));
exports.isEveryOk = isEveryOk;
const unwrapOk = ({ _value: value }) => value;
exports.unwrapOk = unwrapOk;
const unwrapErr = ({ _error: error }) => error;
exports.unwrapErr = unwrapErr;
const unwrapOr = (r, fallback) => exports.isOk(r) ? r._value : fallback;
exports.unwrapOr = unwrapOr;
const unwrap = (r) => {
    if (exports.isErr(r)) {
        throw new Error(`Not Ok result. [${r._error}]`);
    }
    return r._value;
};
exports.unwrap = unwrap;
const chain = (r, f) => (exports.isOk(r) ? f(exports.unwrapOk(r)) : r);
exports.chain = chain;
const chainErr = (r, f) => (exports.isErr(r) ? f(exports.unwrapErr(r)) : r);
exports.chainErr = chainErr;
const map = (r, f) => (exports.isOk(r) ? exports.ok(f(exports.unwrapOk(r))) : r);
exports.map = map;
const mapErr = (r, f) => (exports.isErr(r) ? exports.err(f(exports.unwrapErr(r))) : r);
exports.mapErr = mapErr;
