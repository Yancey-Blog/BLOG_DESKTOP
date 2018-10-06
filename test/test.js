const arr = [
  {
    tags: [
      'Sayaka',
    ],
  },
  {
    tags: [
      '没变迁',
    ],
  },
  {
    tags: [
      '等等',
    ],
  },
  {
    tags: [
      'demo1',
    ],
  },
  {
    tags: [
      '123',
    ],
  },
  {
    tags: [
      '11',
    ],
  },
  {
    tags: [
      '111',
    ],
  },
  {
    tags: [
      'yacney',
    ],
  },
  {
    tags: [
      '11',
      '再相见',
    ],
  },
  {
    tags: [
      '11',
    ],
  },
  {
    tags: [
      '22',
    ],
  },
  {
    tags: [
      'JavaScript',
    ],
  },
  {
    tags: [
      'CSS',
    ],
  },
  {
    tags: [
      'JavaScript',
    ],
  },
  {
    tags: [
      'CSS',
    ],
  },
];

const deepFlatten = (arr) => {
  const flatten = (arr) => [].concat(...arr);
  return flatten(arr.map(x => Array.isArray(x) ? deepFlatten(x) : x));
};

const _arr = [];
for (let i = 0; i < arr.length; i += 1) {
  _arr.push(arr[i].tags);
}
console.log(deepFlatten(_arr));

