import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import Layouts from './layouts/Layouts';
import stores from './stores/index';
import * as serviceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider {...stores}>
    <BrowserRouter>
      <Layouts />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);

serviceWorker.unregister();
