import * as React from 'react';
import { Router, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import stores from './stores/index';
import ReactGA from 'react-ga';
import history from './history';
import { checkWebp, devToolsWarning } from '@tools/tools';
import { GA } from '@constants/constants';
import '@assets/styles/global.scss';
import Layouts from './layouts/Layouts';
import AutoBackToTop from '@components/Common/AutoBackToTop/AutoBackToTop';

class App extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public componentWillMount() {
    window.localStorage.setItem('isWebp', checkWebp().toString());
    this.reactGA();
    devToolsWarning();
  }

  public reactGA() {
    ReactGA.initialize(GA);
    ReactGA.pageview(window.location.pathname + window.location.search);
    history.listen(() => {
      ReactGA.pageview(window.location.pathname + window.location.search);
    });
  }

  public render() {
    return (
      <Provider {...stores}>
        <Router history={history}>
          <AutoBackToTop>
            <div className='App'>
              <Switch>
                <Layouts />
              </Switch>
            </div>
          </AutoBackToTop>
        </Router>
      </Provider>
    );
  }
}

export default App;
