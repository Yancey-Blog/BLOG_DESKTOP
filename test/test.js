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

const markyun = {};

markyun.Event = {
  // 页面加载完成后
  readyEvent(fn) {
    if (fn == null) {
      fn = document;
    }
    const oldonload = window.onload;
    if (typeof window.onload !== 'function') {
      window.onload = fn;
    } else {
      window.onload = function () {
        oldonload();
        fn();
      };
    }
  },
  // 视能力分别使用dom0||dom2||IE方式 来绑定事件
  // 参数： 操作的元素,事件名称 ,事件处理程序
  addEvent(element, type, handler) {
    if (element.addEventListener) {
      // 事件类型、需要执行的函数、是否捕捉
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent(`on${type}`, () => {
        handler.call(element);
      });
    } else {
      element[`on${type}`] = handler;
    }
  },
  // 移除事件
  removeEvent(element, type, handler) {
    if (element.removeEventListener) {
      element.removeEventListener(type, handler, false);
    } else if (element.datachEvent) {
      element.detachEvent(`on${type}`, handler);
    } else {
      element[`on${type}`] = null;
    }
  },
  // 阻止事件 (主要是事件冒泡，因为IE不支持事件捕获)
  stopPropagation(ev) {
    if (ev.stopPropagation) {
      ev.stopPropagation();
    } else {
      ev.cancelBubble = true;
    }
  },
  // 取消事件的默认行为
  preventDefault(event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },
  // 获取事件目标
  getTarget(event) {
    return event.target || event.srcElement;
  },
  // 获取event对象的引用，取到事件的所有信息，确保随时能使用event；
  getEvent(e) {
    let ev = e || window.event;
    if (!ev) {
      let c = this.getEvent.caller;
      while (c) {
        ev = c.arguments[0];
        if (ev && Event == ev.constructor) {
          break;
        }
        c = c.caller;
      }
    }
    return ev;
  },
};

function deepClone(initalObj, finalObj) {
  var obj = finalObj || {};
  for (var i in initalObj) {
    var prop = initalObj[i];        // 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况
    if(prop === obj) {
      continue;
    }
    if (typeof prop === 'object') {
      obj[i] = (prop.constructor === Array) ? [] : {};
      arguments.callee(prop, obj[i]);
    } else {
      obj[i] = prop;
    }
  }
  return obj;
}
var str = {};
var obj = { a: {a: "hello", b: 21} };
deepClone(obj, str);
console.log(str.a);

function deepClone(initalObj, finalObj) {
  var obj = finalObj || {};
  for (var i in initalObj) {
    var prop = initalObj[i];        // 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况
    if(prop === obj) {
      continue;
    }
    if (typeof prop === 'object') {
      obj[i] = (prop.constructor === Array) ? [] : Object.create(prop);
    } else {
      obj[i] = prop;
    }
  }
  return obj;
}
