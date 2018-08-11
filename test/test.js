const Mock = require('mockjs');

const data = Mock.mock({
  'data|20': [
    {
      poster: '@image(\'500x500\', \'@color()\')',
      publish_date: '@date()',
      modify_date: '@date()',
      title: '@ctitle(6, 18)',
      summary: '@cparagraph(3, 7)',
      like_count: '@integer(0, 500)',
      comment_count: '@integer(0, 500)',
      category: '@word(4, 12)',
      content: '@cparagraph(10, 20)',
      'comments|0-5': [[{
        name: '@name',
        avatar: '@url',
        browser: '@word(10, 18)',
        os: '@word(4, 10)',
        content: '@cparagraph(1, 4)',
        position: '@csentence(5, 12)',
      }]],
    }],
});
// 输出结果
console.log(JSON.stringify(data, null, 4));
