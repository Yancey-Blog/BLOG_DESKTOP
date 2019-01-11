import * as React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import stores from './stores/index';
import history from './history';
import ReactGA from 'react-ga';
import Loadable from 'react-loadable';
import './assets/styles/global.scss';
import { checkWebp } from './tools/tools';
import { GA } from './constant/constant';
import routePath from './constant/routePath';
import Home from './containers/Home/Home';
import Player from './components/Widget/Player/Player';
import ScrollToTop from './components/Widget/ScrollToTop/ScrollToTop';
import Header from './components/Common/Header/Header';
import Footer from './components/Common/Footer/Footer';

const Loadings = () => (
  <div className='loading_wrapper'>
    <div className='loading_item' />
  </div>
);

const Blog = Loadable({
  loader: () => import('./containers/Blog/Blog'),
  loading: Loadings,
});

const Legal = Loadable({
  loader: () => import('./containers/Legal/Legal'),
  loading: Loadings,
});

const Apps = Loadable({
  loader: () => import('./containers/Apps/Apps'),
  loading: Loadings,
});

const CV = Loadable({
  loader: () => import('./containers/CV/CV'),
  loading: Loadings,
});

const NotFound = Loadable({
  loader: () => import('./containers/NotFound/NotFound'),
  loading: Loadings,
});

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
              <Route path={routePath.home} exact component={Home} />
              <Route path={routePath.legal} component={Legal} />
              <Route path={routePath.blog} component={Blog} />
              <Route path={`${routePath.tag}:id`} component={Blog} />
              <Route path={routePath.search} component={Blog} />
              <Route path={routePath.apps} component={Apps} />
              <Route path={routePath.cv} component={CV} />
              <Route path={routePath.notFound} component={NotFound} />
              <Route component={NotFound} />
            </Switch>
            <ScrollToTop />
            <Player />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
