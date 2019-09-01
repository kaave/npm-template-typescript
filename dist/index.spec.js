"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const index_1 = tslib_1.__importDefault(require("~/index"));
describe('add', () => {
    it('will be success im happy!', () => {
        expect(index_1.default(10, 20)).toBe(30);
    });
});
