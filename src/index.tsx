import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import Layouts from './layouts/Layouts';
import stores from './stores/index';
import * as serviceWorker from './registerServiceWorker';
// import * as Sentry from '@sentry/browser';

// Sentry.init({
//   dsn: 'https://2998f0f7a05044969a7859a2596e6977@sentry.io/1468725',
// });

// Sentry.captureException

ReactDOM.render(
  <Provider {...stores}>
    <BrowserRouter>
      <Layouts />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);

serviceWorker.unregister();
