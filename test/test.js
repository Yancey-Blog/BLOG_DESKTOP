const arr = [
  {
    _id: {
      year: 2018,
    },
    data: [
      {
        month: 10,
        data: [
          {
            day: 13,
            title: 'demo5',
            id: '5bc202a26b48dfee0a0dcedf',
            pv_count: 8,
          },
          {
            day: 13,
            title: 'demo4',
            id: '5bc2028a6b48dfee0a0dcede',
            pv_count: 6,
          },
          {
            day: 13,
            title: 'demo3',
            id: '5bc2024a6b48dfee0a0dcedd',
            pv_count: 16,
          },
        ],
      },
    ],
  },
  {
    _id: {
      year: 2017,
    },
    data: [
      {
        month: 12,
        data: [
          {
            day: 20,
            title: 'demo2',
            id: '5bc2006c5aa898eaf3870d3c',
            pv_count: 17,
          },
        ],
      },
      {
        month: 11,
        data: [
          {
            day: 13,
            title: 'demo1',
            id: '5bc1fed569c03ee95784345e',
            pv_count: 19,
          },
        ],
      },
    ],
  },
];

console.log(arr[0].data)
// function isPrime(number) {
//   if (!(number === +number && /^[0-9]+$/.test(number))) {
//     return false;
//   }
//   if (number < 2) {
//     return false;
//   }
//   if (number === 2) {
//     return true;
//   }
//   if (number % 2 === 0) {
//     return false;
//   }
//   const squareRoot = Math.sqrt(number);
//   for (let i = 3; i <= squareRoot; i += 2) {
//     if (number % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
//
// console.log(isPrime(10081));


// const myHttpClient = url => new Promise((resolve, reject) => {
//   const client = new XMLHttpRequest();
//   client.open('GET', url);
//   client.onreadystatechange = handler;
//   client.responseType = 'json';
//   client.setRequestHeader('Accept', 'application/json');
//   client.send();
//   function handler() {
//     if (this.readyState !== 4) {
//       return;
//     }
//     if (this.status === 200) {
//       resolve(this.response);
//     } else {
//       reject(new Error(this.statusText));
//     }
//   }
// });
//
// myHttpClient('https://www.baidu.com').then((res) => {
//   console.log(res);
// }).catch((error) => {
//   console.log(error);
// });
//
// function myTrim(str) {
//   const reg = /^\s+|\s+$/g;
//   return str.replace(reg, '');
// }
// console.log(myTrim('    asdf    '));
//
// $.ajax({
//   url: 'http://www.domain2.com:8080/login',
//   type: 'get',
//   dataType: 'jsonp', // 请求方式为jsonp
//   jsonpCallback: 'onBack', // 自定义回调函数名
//   data: {},
// });

// function binarySearch(arr, key) {
//   let low = 0;
//   let high = arr.length - 1;
//   while (low <= high) {
//     const mid = parseInt((high + low) / 2, 10);
//     if (key === arr[mid]) {
//       return mid;
//     } if (key > arr[mid]) {
//       low = mid + 1;
//     } else if (key < arr[mid]) {
//       high = mid - 1;
//     } else {
//       return -1;
//     }
//   }
// }
//
//
// const t = 4;
// function foo() {
//   const tem = 12;
//   return function bar() {
//     const temo = 34;
//     console.log(`${t} ${tem} ${temo}`);
//   };
// }
//
// function FF(a, b) {
//   this.a = a;
//   this.b = b;
// }
// FF.prototype.test = function () {
//   console.log(`${this.a} success ${this.b}`);
// };
//
// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//
//   toString() {
//     return `(${this.x}, ${this.y})`;
//   }
// }
//
// const point = new Point(3, 4);
//
// function myNew(constructor, ...args) {
//   const o = {};
//   o.__proto__ = constructor.prototype;
//   constructor.call(o, ...args);
//   return o;
// }
//
// const point1 = myNew(Point, 3, 4);
//
// console.log(point);
// console.log(point1);

// 多层obj
// const obj = {
//   name: {
//     firstName: 'Yancey',
//     lastName: 'Leo',
//   },
// };
//
// // 单层obj
// const _obj = {
//   firstName: 'Yancey',
//   lastName: 'Leo',
//   foo() {
//     console.log('ss');
//   },
// };
//
// const newObj = Object.assign({}, obj);
// newObj.name.firstName = 'yancey';
// console.log(obj.name.firstName);
//
// const _newObj = Object.assign({}, obj);
// _newObj.firstName = 'yancey';
// console.log(_obj.firstName);
