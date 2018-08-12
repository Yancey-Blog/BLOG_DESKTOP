import React, { Component } from 'react';
import Header from './components/Common/Header/header';
import Footer from './components/Common/Footer/footer';
import BackToTop from './components/Widget/BackToTop/backToTop';
import ScrollProgress from './components/Widget/ScrollProgress/scrollProgress';
import Player from './components/Widget/Player/player';
import Home from './containers/Home/Home';
import BlogDetail from './containers/BlogDetail/BlogDetail';

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
    const { msg } = this.state;
    return (
      <div className="App">
        <Header msg={msg} />
        <ScrollProgress />
        <Home />
        <BackToTop />
        <Player />
        <Footer />
      </div>
    );
  }
}

export default App;
