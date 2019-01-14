import axios, {
  AxiosError,
  AxiosResponse,
  AxiosRequestConfig,
} from 'axios';

import baseURL from '../baseUrl';

const CancelToken = axios.CancelToken;

// config timeout
axios.defaults.timeout = 30 * 1000;

// config cookie
// axios.defaults.withCredentials = true;

// config request header
axios.defaults.headers.post['Content-Type'] = 'application/json';

// config base url
axios.defaults.baseURL = baseURL.prod;

const pending: any[] = [];
const removePending = (config: any) => {
  for (const p in pending) {
    if (pending[p].u === config.url + '&' + config.method) {
      pending[p].f();
      pending.splice(parseInt(p, 10), 1);
    }
  }
}


// config request interceptors
axios.interceptors.request.use(
  (config) => {
    removePending(config);
    config.cancelToken = new CancelToken((c) => {
      pending.push({
        u: config.url + '&' + config.method,
        f: c
      });
    });
    return config;
  },
  (err) => Promise.reject(err),
);
// config response interceptors
axios.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '400 Bad Request';
          break;
        case 401:
          error.message = '401 Unauthorized';
          window.location.href = '/login';
          break;
        case 403:
          error.message = '403 Forbidden';
          break;
        case 404:
          error.message = '404 Not Found';
          break;
        case 500:
          error.message = '500 Internal Server Error';
          break;
        case 502:
          error.message = '502 Bad Gateway';
          break;
        case 504:
          error.message = '504 Internal Server Error';
          break;
        default:
          error.message = `Unkown error and the status code is ${error.response.status}`;
      }
    } else {
      error.message = 'Unkown error';
    }
    return Promise.reject(error.message);
  });

// GET
export function GET(url: string, params: object | null, errMsg: string | null): Promise < AxiosResponse > {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params,
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        err = errMsg ? errMsg : err
        // 可以定义Toast组件输出err
        reject(err);
      });
  });
}

// POST
export function POST(url: string, params: object | null, config ? : AxiosRequestConfig): Promise < AxiosResponse > {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params, config)
      .then(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        },
      )
      .catch((err) => {
        reject(err);
      });
  });
}

// PUT
export function PUT(url: string, params: object | null, errMsg: string | null): Promise < AxiosResponse > {
  return new Promise((resolve, reject) => {
    axios
      .put(url, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        err = errMsg ? errMsg : err;
        reject(err);
      });
  });
}

// DELETE
export function DELETE(url: string, params: object | null): Promise < AxiosResponse > {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, {
        data: params,
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}