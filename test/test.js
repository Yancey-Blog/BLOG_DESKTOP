const Mock = require('mockjs');

const data = Mock.mock({
  'list|3': [{
    'id|+1': 1,
    url: [
      '@url',
    ],
    poster: [
      '@image(\'500x500\', \'@color()\')',
    ],
    publishDate: [
      '@date()',
    ],
    lastModifiedDate: [
      '@date()',
    ],
    title: [
      '@title(4, 6)',
    ],
    summary: [
      '@paragraph(2)',
    ],
    like: [
      '@integer(0, 500)',
    ],
    comment: [
      '@integer(0, 500)',
    ],
    category: [
      '@word(4, 12)',
    ],
  }],
});
// 输出结果
console.log(JSON.stringify(data, null, 4));
