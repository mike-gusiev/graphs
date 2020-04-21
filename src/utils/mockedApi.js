let mockData = [
  {
    name: 'linear',
    x: [],
    y: [],
  },
  {
    name: 'squared',
    x: [],
    y: [],
  },
  {
    name: 'cubed',
    x: [],
    y: [],
  },
];

function* range(start = 0, end = undefined, step = 1) {
  if (arguments.length === 1) {
    end = start;
    start = 0;
  }

  [...arguments].forEach(arg => {
    if (typeof arg !== 'number') {throw new TypeError('Invalid argument');}
  });
  if (arguments.length === 0) {throw new TypeError('range requires at least 1 argument, got 0');}

  if (start > end) return;
  yield start;
  yield* range(Number(parseFloat((start + step).toFixed(2))), end, step);

}

export function linear(start, end, step) {
  return [...range(start, end, step)];
}

export function cubed(start, end, step) {
  return [...range(start, end, step)].map(n => {
    return +((n.toFixed(1) ** 3).toFixed(2));
  });
}

export function squared(start, end, step) {
  return [...range(start, end, step)].map(n => {
    return +(((n.toFixed(1) ** 2)).toFixed(2));
  });
}


export default function apiCall(start, end, step) {
  return mockData.map(obj => {
    const el = {...obj};
    let temp;
    el.x = linear(start, end, step);
    switch (obj.name) {
      case 'cubed':
        temp = cubed(start, end, step);
        el.y = [...temp];
        return el;
      case 'linear':
        temp = linear(start, end, step);
        el.y = [...temp];
        return el;
      case 'squared':
        temp = squared(start, end, step);
        el.y = [...temp];
        return el;
      default:
        return obj;
    }
  });
}

console.log(cubed(1, 2, 0.5));
