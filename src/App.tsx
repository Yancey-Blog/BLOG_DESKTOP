import * as React from 'react';
import { Router, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import stores from './stores/index';
import ReactGA from 'react-ga';
import history from './history';
import { GA } from '@constants/constants';
import '@assets/styles/global.scss';
import Layouts from './layouts/Layouts';

class App extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public componentWillMount() {
    this.reactGA();
  }

  public reactGA() {
    ReactGA.initialize(GA);
    history.listen(() => {
      ReactGA.pageview(window.location.pathname + window.location.search);
    });
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
