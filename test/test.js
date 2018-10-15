const str = '我是{name}, 我的工作是{job}';
const obj = {
  name: 'Yancey',
  job: 'Web developer',
};

function tmpl(_str, _obj) {
  return _str.match(/^{.*?}$/);
}
console.log(tmpl(str));

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
