const Mock = require('mockjs');

const data = Mock.mock({
  'data|10': [{
    'id|+1': 1,
    url: 'https://www.yanceyleo.com/blog/@word(4, 12)',
    poster: '@image(\'500x500\', \'@color()\')',
    publish_date: '@date()',
    last_modified_date: '@date()',
    title: '@ctitle(6, 18)',
    summary: '@cparagraph(3, 7)',
    like_num: '@integer(0, 500)',
    comment_num: '@integer(0, 500)',
    category: '@word(4, 12)',
  }],
});
// 输出结果
console.log(JSON.stringify(data, null, 4));
