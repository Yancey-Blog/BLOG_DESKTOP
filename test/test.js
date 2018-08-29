const Mock = require('mockjs');

const data = Mock.mock({
  'data|2-3': [
    {
      year: '20@integer(10, 18)',
      'data|1-12': [
        {
          month: '@integer(1, 12)',
          'days|0-6': [
            {
              day: '@integer(1, 28)',
              title: '@ctitle(10, 30)',
              like_count: '@integer(0, 500)',
              comment_count: '@integer(0, 500)',
              url: '@url',
            },
          ],
        },
      ],
    },
  ],
});
// 输出结果
console.log(JSON.stringify(data, null, 4));

const demoData = [
  {
    year: 2018,
    data: [
      {
        month: 1,
        days: [
          {
            day: 27,
            title: 'Vue终极教程修订版',
            url: 'https://www.yanceyleo.com',
            like_count: 10,
            comment_count: 100,
          },
          {
            day: 23,
            title: 'React终极教程修订版',
            url: 'https://www.yanceyleo.com',
            like_count: 10,
            comment_count: 100,
          },
          // ...
        ],
      },
      // ...
    ],
  },
  // ...
];
