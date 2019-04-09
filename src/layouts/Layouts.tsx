import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
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

const loading = props => {
  if (props.pastDelay) {
    return <Loading />;
  } else {
    return null;
  }
};

const Home = Loadable({
  loader: () => import('../containers/Home/Home'),
  loading,
  delay: 50,
});

const Blog = Loadable({
  loader: () => import('../containers/Blog/Blog'),
  loading,
  delay: 50,
});

const BlogDetail = Loadable({
  loader: () => import('../containers/BlogDetail/BlogDetail'),
  loading,
  delay: 50,
});

const Archive = Loadable({
  loader: () => import('../containers/Archive/Archive'),
  loading,
  delay: 50,
});

const Legal = Loadable({
  loader: () => import('../containers/Legal/Legal'),
  loading,
  delay: 50,
});

const Apps = Loadable({
  loader: () => import('../containers/Apps/Apps'),
  loading,
  delay: 50,
});

const CV = Loadable({
  loader: () => import('../containers/CV/CV'),
  loading,
  delay: 50,
});

const Music = Loadable({
  loader: () => import('../containers/Music/Music'),
  loading,
  delay: 50,
});

const About = Loadable({
  loader: () => import('../containers/About/About'),
  loading,
  delay: 50,
});

// 后期跳转监听
history.listen((location, action) => {
  window.localStorage.curPath = location.pathname;
});

@inject('layoutsStore')
@observer
class Layouts extends React.Component<ILayoutsProps, {}> {
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
          <Switch>
            <Route path={routePath.home} exact component={Home} />
            <Route path={routePath.legal} component={Legal} />
            <Route
              path={routePath.blog}
              render={props => <Blog {...props} key={location.pathname} />}
            />
            <Route
              path={`${routePath.tag}:id`}
              render={props => <Blog {...props} key={location.pathname} />}
            />
            <Route path={routePath.search} component={Blog} />
            <Route
              path={`${routePath.blogDetail}:id`}
              render={props => (
                <BlogDetail {...props} key={location.pathname} />
              )}
            />
            <Route path={routePath.archive} component={Archive} />
            <Route path={routePath.apps} component={Apps} />
            <Route path={routePath.cv} component={CV} />
            <Route path={routePath.music} component={Music} />
            <Route path={routePath.about} component={About} />
            <Route path={routePath.notFound} component={NotFound} />
            <Route component={NotFound} />
          </Switch>
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
