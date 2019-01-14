import * as React from 'react';
import { Router, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import stores from './stores/index';
import history from './history';
import './assets/styles/global.scss';
import Layouts from './layouts/Layouts';

class App extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <Provider {...stores}>
        <Router history={history}>
          <div className='App'>
            <Switch>
              <Layouts />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
