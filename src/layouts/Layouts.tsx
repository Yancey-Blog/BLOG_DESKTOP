import React, { Component, Suspense, lazy } from 'react';
import { observer, inject } from 'mobx-react';
import { Route, Switch, Router } from 'react-router-dom';
import classnames from 'classnames';
import { ToastContainer } from 'react-toastify';
import ReactGA from 'react-ga';

import 'assets/styles/global.scss';
import 'react-toastify/dist/ReactToastify.css';

import history from '../history';
import routePath from 'constants/routePath';
import { checkWebp, devToolsWarning } from 'tools/tools';
import { GA } from 'constants/constants';

import AutoBackToTop from 'components/Common/AutoBackToTop/AutoBackToTop';
import Player from 'components/Widget/Player/Player';
import ScrollToTop from 'components/Widget/ScrollToTop/ScrollToTop';
import Header from 'components/Common/Header/Header';
import Footer from 'components/Common/Footer/Footer';
import Loading from 'components/Common/Loading/Loading';
import NotFound from '../containers/NotFound/NotFound';

import { ILayoutsProps } from '../types/layout';

const Home = lazy(() => import('../containers/Home/Home'));
const Blog = lazy(() => import('../containers/Blog/Blog'));
const BlogDetail = lazy(() => import('../containers/BlogDetail/BlogDetail'));
const Archive = lazy(() => import('../containers/Archive/Archive'));
const Legal = lazy(() => import('../containers/Legal/Legal'));
const Apps = lazy(() => import('../containers/Apps/Apps'));
const CV = lazy(() => import('../containers/CV/CV'));
const Music = lazy(() => import('../containers/Music/Music'));
const About = lazy(() => import('../containers/About/About'));

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
            <Suspense fallback={<Loading />}>
              <Switch>
                <Route path={routePath.home} exact render={() => <Home />} />
                <Route path={routePath.legal} render={() => <Legal />} />
                <Route
                  path={routePath.blog}
                  render={props => (
                    <Blog {...props} key={window.location.pathname} />
                  )}
                />
                <Route
                  path={`${routePath.tag}:id`}
                  render={props => (
                    <Blog {...props} key={window.location.pathname} />
                  )}
                />
                <Route path={routePath.search} render={() => <Blog />} />
                <Route
                  path={`${routePath.blogDetail}:id`}
                  render={props => (
                    <BlogDetail {...props} key={window.location.pathname} />
                  )}
                />
                <Route path={routePath.archive} render={() => <Archive />} />
                <Route path={routePath.apps} render={() => <Apps />} />
                <Route path={routePath.cv} render={() => <CV />} />
                <Route path={routePath.music} render={() => <Music />} />
                <Route path={routePath.about} render={() => <About />} />
                <Route path={routePath.notFound} render={() => <NotFound />} />
                <Route render={() => <NotFound />} />
              </Switch>
            </Suspense>
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
