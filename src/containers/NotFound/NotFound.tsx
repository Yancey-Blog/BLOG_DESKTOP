import * as React from 'react';
import Title from '@components/Common/Title/Title';
import history from '../../history';
import styles from './NotFound.module.scss';
import routePath from '@constants/routePath';

class NotFound extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public handleBack = () => {
    history.push(routePath.home);
  };

  public render() {
    return (
      <main className={styles.not_found_wrapper}>
        <Title title='404' />
        <div className={styles.unicorn} />
        <div className={styles.not_found_container}>
          <div className={styles.four_oh_four}>
            <h1>404 Error</h1>
          </div>
          <div className={styles.warning}>
            <h2>All those moments will be lost in time, like tears in rain.</h2>
            <p>
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>
            <button onClick={() => this.handleBack()}>Back To Home</button>
          </div>
        </div>
      </main>
    );
  }
}

export default NotFound;
