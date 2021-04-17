"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEaseFlipTimings = exports.range = exports.ease = void 0;
const tslib_1 = require("tslib");
const bezier_easing_1 = tslib_1.__importDefault(require("bezier-easing"));
exports.ease = {
    easeIn: bezier_easing_1.default(0.47, 0, 0.745, 0.715),
    easeOut: bezier_easing_1.default(0.39, 0.575, 0.565, 1),
    easeInOut: bezier_easing_1.default(0.445, 0.05, 0.55, 0.95),
    easeInQuad: bezier_easing_1.default(0.55, 0.085, 0.68, 0.53),
    easeOutQuad: bezier_easing_1.default(0.25, 0.46, 0.45, 0.94),
    easeInOutQuad: bezier_easing_1.default(0.455, 0.03, 0.515, 0.955),
    easeInCubic: bezier_easing_1.default(0.55, 0.055, 0.675, 0.19),
    easeOutCubic: bezier_easing_1.default(0.215, 0.61, 0.355, 1),
    easeInOutCubic: bezier_easing_1.default(0.645, 0.045, 0.355, 1),
    easeInQuart: bezier_easing_1.default(0.895, 0.03, 0.685, 0.22),
    easeOutQuart: bezier_easing_1.default(0.165, 0.84, 0.44, 1),
    easeInOutQuart: bezier_easing_1.default(0.77, 0, 0.175, 1),
    easeInQuint: bezier_easing_1.default(0.755, 0.05, 0.855, 0.06),
    easeOutQuint: bezier_easing_1.default(0.23, 1, 0.32, 1),
    easeInOutQuint: bezier_easing_1.default(0.86, 0, 0.07, 1),
    easeInExpo: bezier_easing_1.default(0.95, 0.05, 0.795, 0.035),
    easeOutExpo: bezier_easing_1.default(0.19, 1, 0.22, 1),
    easeInOutExpo: bezier_easing_1.default(1, 0, 0, 1),
    easeInCirc: bezier_easing_1.default(0.6, 0.04, 0.98, 0.335),
    easeOutCirc: bezier_easing_1.default(0.075, 0.82, 0.165, 1),
    easeInOutCirc: bezier_easing_1.default(0.785, 0.135, 0.15, 0.86),
    easeInBack: bezier_easing_1.default(0.6, -0.28, 0.735, 0.045),
    easeOutBack: bezier_easing_1.default(0.175, 0.885, 0.32, 1.275),
    easeInOutBack: bezier_easing_1.default(0.68, -0.55, 0.265, 1.55),
};
function* range(start, end, step = 1) {
    for (let i = start; i < end; i += step) {
        yield i;
    }
}
exports.range = range;
function createEaseFlipTimings({ easing, steps, msec, }) {
    const fps = 60;
    const totalFlips = Math.floor((msec / 1000) * fps);
    const easingFunction = Array.isArray(easing) ? bezier_easing_1.default(...easing) : exports.ease[easing];
    const [, ...tail] = [...Array(totalFlips).keys()].reduce((acc, frame) => {
        const step = Math.floor(easingFunction(frame / totalFlips) * steps);
        return acc[step] === undefined ? [...acc, Math.floor(frame * (1000 / fps))] : acc;
    }, []);
    return [...tail, msec];
}
exports.createEaseFlipTimings = createEaseFlipTimings;
