import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import ReactGA from 'react-ga';
import Loadable from 'react-loadable';
import history from './history';
import stores from './stores/index';
import './assets/css/base.css';
import { globalApi } from './https/index';
import { checkWebp } from './utils/tools';
import GA from './constant/constant';

import Header from './components/Common/Header/header';
import Footer from './components/Common/Footer/footer';
import BackToTop from './components/Widget/BackToTop/backToTop';
import Player from './components/Widget/Player/player';

import Home from './containers/Home/Home';

const Loadings = () => (
  <div className="loading_wrapper">
    <div className="loading_item" />
  </div>
);

// const Home = Loadable({
//   loader: () => import('./containers/Home/Home'),
//   loading: Loadings,
// });

const Blog = Loadable({
  loader: () => import('./containers/Blog/Blog'),
  loading: Loadings,
});

const BlogDetail = Loadable({
  loader: () => import('./containers/BlogDetail/BlogDetail'),
  loading: Loadings,
});

const Archive = Loadable({
  loader: () => import('./containers/Archive/Archive'),
  loading: Loadings,
});

const Music = Loadable({
  loader: () => import('./containers/Music/Music'),
  loading: Loadings,
});

const CV = Loadable({
  loader: () => import('./containers/CV/CV'),
  loading: Loadings,
});

const Apps = Loadable({
  loader: () => import('./containers/Apps/Apps'),
  loading: Loadings,
});

const PrivacyPolicy = Loadable({
  loader: () => import('./containers/PrivacyPolicy/PrivacyPolicy'),
  loading: Loadings,
});

const About = Loadable({
  loader: () => import('./containers/About/About'),
  loading: Loadings,
});

const NotFound = Loadable({
  loader: () => import('./containers/NotFound/NotFound'),
  loading: Loadings,
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullSiteGray: false,
    };
  }

  componentWillMount() {
    this.reactGA();
  }

  componentDidMount() {
    this.getGlobalData();
    window.localStorage.isWebp = checkWebp();
  }

  getGlobalData = async () => {
    const response = await globalApi.getData();
    this.setState({
      fullSiteGray: response.data.full_site_gray,
    });
  };

  reactGA() {
    ReactGA.initialize(GA);
    history.listen(() => {
      ReactGA.pageview(window.location.pathname + window.location.search);
    });
  }

  render() {
    const { fullSiteGray } = this.state;
    const grayStyle = {
      filter: 'grayscale(100%)',
    };
    return (
      <Provider {...stores}>
        <Router history={history}>
          <div
            className="App"
            style={fullSiteGray ? grayStyle : {}}
          >
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/legal" component={PrivacyPolicy} />
              <Route path="/about" component={About} />
              <Route path="/blog" component={Blog} />
              <Route path="/t/:id" component={Blog} />
              <Route path="/search/" component={Blog} />
              <Route path="/p/:id" component={BlogDetail} />
              <Route path="/archive" component={Archive} />
              <Route path="/music" component={Music} />
              <Route path="/cv" component={CV} />
              <Route path="/apps" component={Apps} />
              <Route path="/404" component={NotFound} />
              <Route component={NotFound} />
            </Switch>
            <BackToTop />
            <Player />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
