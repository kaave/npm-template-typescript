import buildEasing from 'bezier-easing';

export const ease = {
  easeIn: buildEasing(0.47, 0, 0.745, 0.715) /* http://easings.net/ja#easeInSine */,
  easeOut: buildEasing(0.39, 0.575, 0.565, 1) /* http://easings.net/ja#easeOutSine */,
  easeInOut: buildEasing(0.445, 0.05, 0.55, 0.95) /* http://easings.net/ja#easeInOutSine */,
  easeInQuad: buildEasing(0.55, 0.085, 0.68, 0.53) /* http://easings.net/ja#easeInQuad */,
  easeOutQuad: buildEasing(0.25, 0.46, 0.45, 0.94) /* http://easings.net/ja#easeOutQuad */,
  easeInOutQuad: buildEasing(0.455, 0.03, 0.515, 0.955) /* http://easings.net/ja#easeInOutQuad */,
  easeInCubic: buildEasing(0.55, 0.055, 0.675, 0.19) /* http://easings.net/ja#easeInCubic */,
  easeOutCubic: buildEasing(0.215, 0.61, 0.355, 1) /* http://easings.net/ja#easeOutCubic */,
  easeInOutCubic: buildEasing(0.645, 0.045, 0.355, 1) /* http://easings.net/ja#easeInOutCubic */,
  easeInQuart: buildEasing(0.895, 0.03, 0.685, 0.22) /* http://easings.net/ja#easeInQuart */,
  easeOutQuart: buildEasing(0.165, 0.84, 0.44, 1) /* http://easings.net/ja#easeOutQuart */,
  easeInOutQuart: buildEasing(0.77, 0, 0.175, 1) /* http://easings.net/ja#easeInOutQuart */,
  easeInQuint: buildEasing(0.755, 0.05, 0.855, 0.06) /* http://easings.net/ja#easeInQuint */,
  easeOutQuint: buildEasing(0.23, 1, 0.32, 1) /* http://easings.net/ja#easeOutQuint */,
  easeInOutQuint: buildEasing(0.86, 0, 0.07, 1) /* http://easings.net/ja#easeInOutQuint */,
  easeInExpo: buildEasing(0.95, 0.05, 0.795, 0.035) /* http://easings.net/ja#easeInExpo */,
  easeOutExpo: buildEasing(0.19, 1, 0.22, 1) /* http://easings.net/ja#easeOutExpo */,
  easeInOutExpo: buildEasing(1, 0, 0, 1) /* http://easings.net/ja#easeInOutExpo */,
  easeInCirc: buildEasing(0.6, 0.04, 0.98, 0.335) /* http://easings.net/ja#easeInCirc */,
  easeOutCirc: buildEasing(0.075, 0.82, 0.165, 1) /* http://easings.net/ja#easeOutCirc */,
  easeInOutCirc: buildEasing(0.785, 0.135, 0.15, 0.86) /* http://easings.net/ja#easeInOutCirc */,
  easeInBack: buildEasing(0.6, -0.28, 0.735, 0.045) /* http://easings.net/ja#easeInBack */,
  easeOutBack: buildEasing(0.175, 0.885, 0.32, 1.275) /* http://easings.net/ja#easeOutBack */,
  easeInOutBack: buildEasing(0.68, -0.55, 0.265, 1.55) /* http://easings.net/ja#easeInOutBack */,
};

export function* range(start: number, end: number, step = 1): Generator<number, void> {
  for (let i = start; i < end; i += step) {
    yield i;
  }
}

/**
 * DOM 要素の差し替えなど、時間的に徐々に変化させるのではなくある一定のタイミングでばさっとアクションを起こしたいとき用
 */
export function createEaseFlipTimings({
  easing,
  steps,
  msec,
}: {
  easing: keyof typeof ease | [number, number, number, number];
  steps: number;
  msec: number;
}): number[] {
  const fps = 60;
  const totalFlips = Math.floor((msec / 1000) * fps);
  const easingFunction = Array.isArray(easing) ? buildEasing(...easing) : ease[easing];

  const [, ...tail] = [...Array(totalFlips).keys()].reduce<readonly number[]>((acc, frame) => {
    const step = Math.floor(easingFunction(frame / totalFlips) * steps);
    return acc[step] === undefined ? [...acc, Math.floor(frame * (1000 / fps))] : acc;
  }, []);

  return [...tail, msec];
}
