import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Common/Header/header';
import Footer from './components/Common/Footer/footer';
import BackToTop from './components/Widget/BackToTop/backToTop';
import ScrollProgress from './components/Widget/ScrollProgress/scrollProgress';
import Player from './components/Widget/Player/player';
import Home from './containers/Home/Home';
import Blog from './containers/Blog/Blog';
import BlogDetail from './containers/BlogDetail/BlogDetail';
import Archive from './containers/Archive/Archive';
import CV from './containers/CV/CV';
import Apps from './containers/Apps/Apps';
import PrivacyPolicy from './containers/PrivacyPolicy/PrivacyPolicy';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.devToolsWarning();
  }

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

  render() {
    const duration = 300;

    const defaultStyle = {
      transition: `opacity ${duration}ms ease-in-out`,
      opacity: 0,
    }

    const transitionStyles = {
      entering: { opacity: 0 },
      entered: { opacity: 1 },
    };
    return (
      <div className="App">
        <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/blog" component={Blog} />
            <Route path="/post/:id" component={BlogDetail} />
            <Route path="/archive" component={Archive} />
            <Route path="/cv" component={CV} />
            <Route path="/apps" component={Apps} />
          </Switch>
        <ScrollProgress />
        <BackToTop />
        <Player />
        <Footer />
      </div>
    );
  }
}

export default App;
