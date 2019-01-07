import * as React from 'react';
import styles from './Layouts.module.scss';
import classNames from 'classnames';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import { observer, inject } from 'mobx-react';
import routePath from '../constant/routePath';
import { ILayoutsProps } from '../types/layout';

import Footer from '../components/Common/Footer/Footer';
import Header from '../components/Common/Header/Header';
import Menu from '../components/Common/Menu/Menu';
import CookieConfirmDialog from '../components/CookieConfirmDialog/CookieConfirmDialog';
import Player from '../components/Widget/Player/Player';

const Loadings = () => (
  <div className={styles.loading_wrapper}>
    <div className={styles.loading_item} />
  </div>
);

const Home = Loadable({
  loader: () => import('../components/PostSummary/PostSummary'),
  loading: Loadings,
});

const Blog = Loadable({
  loader: () => import('../components/Post/Post'),
  loading: Loadings,
});

const License = Loadable({
  loader: () => import('../containers/Legal/License'),
  loading: Loadings,
});

const Service = Loadable({
  loader: () => import('../containers/Legal/Service'),
  loading: Loadings,
});

const PrivacyPolicy = Loadable({
  loader: () => import('../containers/Legal/PrivacyPolicy'),
  loading: Loadings,
});

const Music = Loadable({
  loader: () => import('../containers/Music/Music'),
  loading: Loadings,
});

const Apps = Loadable({
  loader: () => import('../containers/Apps/Apps'),
  loading: Loadings,
});

@inject('layoutsStore')
@observer
class Layouts extends React.Component<ILayoutsProps, {}> {
  constructor(props: ILayoutsProps) {
    super(props);
    this.state = {};
  }

  public componentDidMount() {
    const { layoutsStore } = this.props;
    layoutsStore!.getAnnouncementData();
    layoutsStore!.getPlayerData();
  }

  public render() {
    const { layoutsStore } = this.props;
    return (
      <div
        className={classNames(
          styles.layout,
          layoutsStore!.visible ? styles.show_nav : '',
          layoutsStore!.animatable ? styles.animatable : '',
        )}
      >
        <Menu />
        <Header />
        <main className={styles.main_content}>
          <Switch>
            <Route exact path={routePath.home} component={Home} />
            <Route exact path={routePath.blog} component={Blog} />
            <Route path={routePath.privacyPrivacy} component={PrivacyPolicy} />
            <Route path={routePath.service} component={Service} />
            <Route path={routePath.license} component={License} />
            <Route path={routePath.music} component={Music} />
            <Route path={routePath.apps} component={Apps} />
          </Switch>
        </main>
        <Footer />
        <CookieConfirmDialog />
        <Player />
      </div>
    );
  }
}

export default Layouts;
