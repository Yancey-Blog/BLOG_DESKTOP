import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import ReactGA from 'react-ga';
import history from './history';
import stores from './stores/index';
import './assets/css/base.css';
import { globalApi } from './https/index';
import { checkWebp } from './utils/tools';
import GA from './constant/constant';
// todo
// code split
import Header from './components/Common/Header/header';
import Footer from './components/Common/Footer/footer';
import BackToTop from './components/Widget/BackToTop/backToTop';
import Player from './components/Widget/Player/player';
import Home from './containers/Home/Home';
import Blog from './containers/Blog/Blog';
import BlogDetail from './containers/BlogDetail/BlogDetail';
import Archive from './containers/Archive/Archive';
import Music from './containers/Music/Music';
import CV from './containers/CV/CV';
import Apps from './containers/Apps/Apps';
import PrivacyPolicy from './containers/PrivacyPolicy/PrivacyPolicy';
import About from './containers/About/About';
import NotFound from './containers/NotFound/NotFound';

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
