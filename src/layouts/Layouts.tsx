import React, { Component, Suspense, lazy } from 'react';
import { observer, inject } from 'mobx-react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Layouts.module.scss';
import history from '../history';
import routePath from '@constants/routePath';
import Player from '@components/Widget/Player/Player';
import ScrollToTop from '@components/Widget/ScrollToTop/ScrollToTop';
import Header from '@components/Common/Header/Header';
import Footer from '@components/Common/Footer/Footer';
import Loading from '@components/Common/Loading/Loading';
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

history.listen(location => {
  window.localStorage.curPath = location.pathname;
});

@inject('layoutsStore')
@observer
class Layouts extends Component<ILayoutsProps, {}> {
  constructor(props: ILayoutsProps) {
    super(props);
    this.state = {};
  }

  // 页面初始化监听
  public componentWillMount() {
    window.localStorage.curPath = history.location.pathname;
  }

  public componentDidMount() {
    const { layoutsStore } = this.props;
    layoutsStore!.getPlayers();
    layoutsStore!.getGlobalStatus();
  }

  public componentWillUpdate() {
    const { layoutsStore } = this.props;
    layoutsStore!.getLocalPath();
  }

  public render() {
    const { layoutsStore } = this.props;

    const grayStyle = {
      filter: 'grayscale(50%)',
    };
    return (
      <div
        className={layoutsStore!.isHomePage ? styles.layout : ''}
        style={layoutsStore!.globalStatus.full_site_gray ? grayStyle : {}}
      >
        <Header />
        <div className={styles.main_contents}>
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route path={routePath.home} exact render={() => <Home />} />
              <Route path={routePath.legal} render={() => <Legal />} />
              <Route
                path={routePath.blog}
                render={props => <Blog {...props} key={location.pathname} />}
              />
              <Route
                path={`${routePath.tag}:id`}
                render={props => <Blog {...props} key={location.pathname} />}
              />
              <Route path={routePath.search} render={() => <Blog />} />
              <Route
                path={`${routePath.blogDetail}:id`}
                render={props => (
                  <BlogDetail {...props} key={location.pathname} />
                )}
              />
              <Route path={routePath.archive} render={() => <Archive />} />
              <Route path={routePath.apps} render={() => <Apps />} />
              <Route path={routePath.cv} render={() => <CV />} />
              <Route path={routePath.music} render={() => <Music />} />
              <Route path={routePath.about} render={() => <About />} />
              <Route render={() => <NotFound />} />
            </Switch>
          </Suspense>
        </div>
        <ScrollToTop />
        <Player />
        <Footer />
        <ToastContainer />
      </div>
    );
  }
}

export default Layouts;
