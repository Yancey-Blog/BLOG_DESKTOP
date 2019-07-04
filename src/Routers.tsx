import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './containers/NotFound/NotFound';
import Loading from '@components/Common/Loading/Loading';
import routePath from '@constants/routePath';

const Home = lazy(() => import('./containers/Home/Home'));
const Blog = lazy(() => import('./containers/Blog/Blog'));
const BlogDetail = lazy(() => import('./containers/BlogDetail/BlogDetail'));
const Archive = lazy(() => import('./containers/Archive/Archive'));
const Legal = lazy(() => import('./containers/Legal/Legal'));
const Apps = lazy(() => import('./containers/Apps/Apps'));
const CV = lazy(() => import('./containers/CV/CV'));
const Music = lazy(() => import('./containers/Music/Music'));
const About = lazy(() => import('./containers/About/About'));

class Routers extends Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
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
            render={props => <BlogDetail {...props} key={location.pathname} />}
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
    );
  }
}

export default Routers;
