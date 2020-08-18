import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import * as Sentry from '@sentry/browser';
import Layouts from './layouts/Layouts';
import stores from './stores/index';
import * as serviceWorker from './registerServiceWorker';
import { sentryDNS } from '@constants/constants';

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: sentryDNS,
  });

  Sentry.captureException;
}

ReactDOM.render(
  <Provider {...stores}>
    <Layouts />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
