import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Router } from 'react-router-dom';
import classnames from 'classnames';
import { ToastContainer } from 'react-toastify';
import ReactGA from 'react-ga';

import '@assets/styles/global.scss';
import 'react-toastify/dist/ReactToastify.css';

import history from '../history';
import { checkWebp, devToolsWarning } from '@tools/tools';
import { GA } from '@constants/constants';

import AutoBackToTop from '@components/Common/AutoBackToTop/AutoBackToTop';
import Player from '@components/Widget/Player/Player';
import ScrollToTop from '@components/Widget/ScrollToTop/ScrollToTop';
import Header from '@components/Common/Header/Header';
import Footer from '@components/Common/Footer/Footer';

import Routers from '../Routers';

import { ILayoutsProps } from '../types/layout';

@inject('layoutsStore')
@observer
class Layouts extends Component<ILayoutsProps, {}> {
  constructor(props: ILayoutsProps) {
    super(props);
    this.state = {};
  }

  // 页面初始化监听
  public componentWillMount() {
    window.localStorage.setItem('isWebp', checkWebp().toString());
    this.reactGA();
    devToolsWarning();
  }

  public componentDidMount() {
    const { layoutsStore } = this.props;
    layoutsStore!.getPlayers();
    layoutsStore!.getGlobalStatus();
  }

  public reactGA() {
    ReactGA.initialize(GA);
    ReactGA.pageview(window.location.pathname + window.location.search);
    history.listen(() => {
      ReactGA.pageview(window.location.pathname + window.location.search);
    });
  }

  public render() {
    const { layoutsStore } = this.props;
    const isGray = layoutsStore!.globalStatus.full_site_gray;

    return (
      <Router history={history}>
        <AutoBackToTop>
          <div
            className={classnames(isGray ? 'full_site_gray' : '', 'content')}
          >
            <Header />
            <Routers />
          </div>
          <ScrollToTop />
          <Player />
          <Footer />
          <ToastContainer />
        </AutoBackToTop>
      </Router>
    );
  }
}

export default Layouts;
