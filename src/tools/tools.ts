const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

import {
  toast
} from 'react-toastify';

// 2018-11-11T07:53:15.403Z => 2018-11-11 15:53:15
export const formatJSONDate = (jsonDate: string): string => {
  return new Date(+new Date(new Date(jsonDate).toJSON()) + 8 * 3600 * 1000).toISOString()
    .replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
};

// 2018-11-11 15:53:15 => November 11, 2018
export const formatCommonDate = (date: string): string => {
  const dataList = date.split(' ')[0].split('-');
  return `${months[parseInt(dataList[1], 10) - 1]} ${dataList[2]}, ${dataList[0]}`;
};

export const monthToEN = (monthNum: number) => {
  const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return monthList[monthNum - 1];
}

export const sortBy = (parent: string, child: string) => (a: any, b: any) =>
  a[parent][child] < b[parent][child] ? 1 : a[parent][child] > b[parent][child] ? -1 : 0;

export const memoized = (fn: any) => {
  const cache = {};
  return (arg: any) => cache[arg] || (cache[arg] = fn(arg))
}

export const once = (fn: any) => {
  let done = false;
  // tslint:disable-next-line:only-arrow-functions
  return function () {
    return done ? false : ((done = true), fn.apply(null, arguments));
  };
};

export const checkWebp = () => {
  return (document.createElement('canvas')
    .toDataURL('image/webp')
    .indexOf('data:image/webp') === 0);
}

export const judgeLanguage = () => {
  // ja-JP zh-CN en-US
  return navigator.language;
}

export const judgeClient = () => {
  const userAgent = navigator.userAgent;
  let client = '';
  if (/(MicroMessenger)/i.test(userAgent)) {
    client = 'Wechat';
  } else if (/(iPhone|iPad|iPod|iOS)/i.test(userAgent)) {
    client = 'iOS';
  } else if (/(Android)/i.test(userAgent)) {
    client = 'Android';
  } else if (/(Macintosh)/i.test(userAgent)) {
    client = 'Mac';
  } else if (/(Linux)/i.test(userAgent)) {
    client = 'Linux';
  } else if (/(Windows)/i.test(userAgent)) {
    client = 'Windows';
  }
  return client;
}

export const initLivere = () => {
  // tslint:disable-next-line:prefer-const
  let LivereTower;
  // tslint:disable-next-line:only-arrow-functions
  (function (d, s) {
    // tslint:disable-next-line:one-variable-per-declaration
    let j,
      // tslint:disable-next-line:prefer-const
      e = d.getElementsByTagName(s)[0];

    if (typeof LivereTower === 'function') {
      return;
    }

    j = d.createElement(s);
    j.src = 'https://cdn-city.livere.com/js/embed.dist.js';
    j.async = true;

    (e.parentNode as HTMLDivElement).insertBefore(j, e);
  }(document, 'script'));
}

export const setToast = (text: string) => {
  return toast.error(`💔 ${text}`, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    className: 'toasting'
  });
}