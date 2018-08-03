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
    this.state = {
      msg: 'en',
    };
  }

  switchLang(msg) {
    this.setState({
      msg,
    });
  }

  render() {
    const {msg} = this.state;
    return (
      <div className="App">
        <Header msg={msg}/>
        <ScrollProgress/>
        <Home/>
        <BackToTop/>
        <Player/>
        <Footer
          msg={msg}
          switchLang={lang => this.switchLang(lang)}
        />
      </div>
    );
  }
}

export default App;
