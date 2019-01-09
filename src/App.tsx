import * as React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import stores from './stores/index';
import history from './history';
import ReactGA from 'react-ga';
import './assets/styles/global.scss';
import { checkWebp } from './tools/tools';
import { GA } from './constant/constant';
import Home from './containers/Home/Home';
import Player from './components/Widget/Player/Player';
import Header from './components/Common/Header/Header';
import Footer from './components/Common/Footer/Footer';
class App extends React.Component {
  public componentWillMount() {
    window.localStorage.isWebp = checkWebp();
  }

  public componentDidMount() {
    this.devToolsWarning();
  }

  public devToolsWarning() {
    const re = /x/;
    // tslint:disable-next-line:no-console
    console.log(re);
    re.toString = () => {
      // tslint:disable-next-line:no-console
      console.log(`
      
         █████▒█    ██  ▄████▄   ██ ▄█▀       ██████╗ ██╗   ██╗ ██████╗
       ▓██   ▒ ██  ▓██▒▒██▀ ▀█   ██▄█▒        ██╔══██╗██║   ██║██╔════╝
       ▒████ ░▓██  ▒██░▒▓█    ▄ ▓███▄░        ██████╔╝██║   ██║██║  ███╗
       ░▓█▒  ░▓▓█  ░██░▒▓▓▄ ▄██▒▓██ █▄        ██╔══██╗██║   ██║██║   ██║
       ░▒█░   ▒▒█████▓ ▒ ▓███▀ ░▒██▒ █▄       ██████╔╝╚██████╔╝╚██████╔╝
        ▒ ░   ░▒▓▒ ▒ ▒ ░ ░▒ ▒  ░▒ ▒▒ ▓▒       ╚═════╝  ╚═════╝  ╚═════╝
        ░     ░░▒░ ░ ░   ░  ▒   ░ ░▒ ▒░
        ░ ░    ░░░ ░ ░ ░        ░ ░░ ░
                 ░     ░ ░      ░  ░
                       ░
      `);
      return '';
    };
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
          <div
            className='App'
            // style={fullSiteGray ? grayStyle : {}}
          >
            <Header />
            <Switch>
              <Route path='/' exact component={Home} />
            </Switch>
            <Player />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
