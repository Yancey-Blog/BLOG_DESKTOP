import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import ReactGA from 'react-ga';
import history from './history';
import stores from './stores/index';
import './assets/css/base.css';
import { globalApi } from './https/index';
import Header from './components/Common/Header/header';
import Footer from './components/Common/Footer/footer';
import BackToTop from './components/Widget/BackToTop/backToTop';
import ScrollProgress from './components/Widget/ScrollProgress/scrollProgress';
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
    this.devToolsWarning();
  }

  getGlobalData = async () => {
    const response = await globalApi.getData();
    this.setState({
      fullSiteGray: response.data.full_site_gray,
    });
  };

  devToolsWarning() {
    const re = /x/;
    console.log(re);
    re.toString = () => {
      console.log('%cDANGER!', 'color:red;font-size:64px;font-weight:bold');
      console.log('This browser feature is for developers only. Please do not copy-paste any code or run any scripts here. It may increase the risk of %c sudden death!!!', 'color:red;font-size:18px');
      console.log('For more information, http://en.wikipedia.org/wiki/Self-XSS');
      return '';
    };
  }

  reactGA() {
    ReactGA.initialize('UA-114532340-1');
    history.listen((location, action) => {
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
              <Route component={NotFound} />
            </Switch>
            <ScrollProgress />
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
