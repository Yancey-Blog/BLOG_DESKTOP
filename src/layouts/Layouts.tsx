import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { checkWebp } from '@tools/tools';
import routePath from '@constants/routePath';
import Player from '@components/Widget/Player/Player';
import ScrollToTop from '@components/Widget/ScrollToTop/ScrollToTop';
import Header from '@components/Common/Header/Header';
import Footer from '@components/Common/Footer/Footer';
import { ILayoutsProps } from '../types/layout';

const Loadings = () => (
  <div className='loading_wrapper'>
    <div className='loading_item' />
  </div>
);

const Home = Loadable({
  loader: () => import('../containers/Home/Home'),
  loading: Loadings,
});

const Blog = Loadable({
  loader: () => import('../containers/Blog/Blog'),
  loading: Loadings,
});

const BlogDetail = Loadable({
  loader: () => import('../containers/BlogDetail/BlogDetail'),
  loading: Loadings,
});

const Archive = Loadable({
  loader: () => import('../containers/Archive/Archive'),
  loading: Loadings,
});

const Legal = Loadable({
  loader: () => import('../containers/Legal/Legal'),
  loading: Loadings,
});

const Apps = Loadable({
  loader: () => import('../containers/Apps/Apps'),
  loading: Loadings,
});

const CV = Loadable({
  loader: () => import('../containers/CV/CV'),
  loading: Loadings,
});

const Music = Loadable({
  loader: () => import('../containers/Music/Music'),
  loading: Loadings,
});

const About = Loadable({
  loader: () => import('../containers/About/About'),
  loading: Loadings,
});

const NotFound = Loadable({
  loader: () => import('../containers/NotFound/NotFound'),
  loading: Loadings,
});

@inject('layoutsStore')
@observer
class Layouts extends React.Component<ILayoutsProps, {}> {
  constructor(props: ILayoutsProps) {
    super(props);
    this.state = {};
  }
  public componentWillMount() {
    window.localStorage.isWebp = checkWebp();
  }

  public componentDidMount() {
    const { layoutsStore } = this.props;
    layoutsStore!.getPlayerData();
    layoutsStore!.getGlobalStatus();
    this.devToolsWarning();
  }

  public devToolsWarning() {
    const re = /x/;
    // tslint:disable-next-line:no-console
    console.log(re);
    re.toString = () => {
      // tslint:disable-next-line:no-console
      console.log(`
      
         █████▒█    ██  ▄████▄   ██ ▄█▀       ██████╗ ██╗   ██╗ ██████╗
       ▓██   ▒ ██  ▓██▒▒██▀ ▀█   ██▄█▒        ██╔══██╗██║   ██║██╔════╝
       ▒████ ░▓██  ▒██░▒▓█    ▄ ▓███▄░        ██████╔╝██║   ██║██║  ███╗
       ░▓█▒  ░▓▓█  ░██░▒▓▓▄ ▄██▒▓██ █▄        ██╔══██╗██║   ██║██║   ██║
       ░▒█░   ▒▒█████▓ ▒ ▓███▀ ░▒██▒ █▄       ██████╔╝╚██████╔╝╚██████╔╝
        ▒ ░   ░▒▓▒ ▒ ▒ ░ ░▒ ▒  ░▒ ▒▒ ▓▒       ╚═════╝  ╚═════╝  ╚═════╝
        ░     ░░▒░ ░ ░   ░  ▒   ░ ░▒ ▒░
        ░ ░    ░░░ ░ ░ ░        ░ ░░ ░
                 ░     ░ ░      ░  ░
                       ░
      `);
      return '';
    };
  }



  public render() {
    const { layoutsStore } = this.props;
    const grayStyle = {
      filter: 'grayscale(100%)',
    };
    return (
      <div style={layoutsStore!.globalStatus.full_site_gray ? grayStyle : {}}>
        <Header />
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
          <Route path={`${routePath.blogDetail}:id`} component={BlogDetail} />
          <Route path={routePath.archive} component={Archive} />
          <Route path={routePath.apps} component={Apps} />
          <Route path={routePath.cv} component={CV} />
          <Route path={routePath.music} component={Music} />
          <Route path={routePath.about} component={About} />
          <Route path={routePath.notFound} component={NotFound} />
          <Route component={NotFound} />
        </Switch>
        <ScrollToTop />
        <Player />
        <Footer />
      </div>
    );
  }
}

export default Layouts;
