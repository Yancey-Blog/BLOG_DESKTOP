import * as React from 'react';
import styles from './Apps.module.scss';
import { IApps } from '../../types/apps';
import { judgeClient } from '../../tools/tools';

class Apps extends React.Component<{}, IApps> {
  constructor(props: {}) {
    super(props);
    this.state = {
      systemType: '',
    };
  }

  public componentWillMount() {
    this.setState({
      systemType: judgeClient(),
    });
  }

  public render() {
    const { systemType } = this.state;
    const typeSvg = {
      andriod: 'https://www-cdn.whatsapp.net/img/v4/badge-google-play-en.svg',
      iOS: 'https://www-cdn.whatsapp.net/img/v4/badge-apple-store-en.svg',
    };
    return (
      <section className={styles.apps_wrapper}>
        <figure className={styles.logo} />
        <p className={styles.keywords}>
          Simple. Secure.
          <br />
          Reliable messaging.
        </p>
        <p className={styles.intro}>
          With WhatsApp, you'll get fast, simple, secure messaging and calling
          for free available on phones all over the world.
        </p>
        <figure className={styles.terminal}>
          <img
            src={systemType === 'iOS' ? typeSvg.iOS : typeSvg.andriod}
            alt={systemType === 'iOS' ? 'iOS' : 'Andriod'}
          />
        </figure>
        <figure className={styles.mobile_img} />
      </section>
    );
  }
}

export default Apps;
