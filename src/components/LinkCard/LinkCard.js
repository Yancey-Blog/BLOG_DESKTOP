import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react/index';
import styles from './linkCard.module.css';

@inject('articleStore')
@observer
class LinkCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    const { articleStore } = this.props;
    return (
      <ul>
        {
          Object.keys(articleStore.top7Data)
            .map(key => (
              <li className={styles.card_item} key={key}>
                <Link to={`/p/${articleStore.top7Data[key]._id}`}> {/*eslint-disable-line*/}
                  <span
                    className={styles.card_bg}
                    style={{ backgroundImage: `url(${articleStore.top7Data[key].header_cover}?x-oss-process=image/resize,w_360/quality,Q_90)` }}
                  />
                  <span className={styles.card_content}>
                    <span>
                      <span className={styles.card_title}>
                        {articleStore.top7Data[key].title}
                      </span>
                      <span className={styles.card_url}>
                      https://www.yanceyleo.com/p/
                        {articleStore.top7Data[key]._id}
                      </span>
                    </span>
                    <span className={styles.card_img_cell}>
                      <img src={`${articleStore.top7Data[key].header_cover}?x-oss-process=image/resize,w_360/quality,Q_90`} alt={articleStore.top7Data[key].title} />
                    </span>
                  </span>
                </Link>
              </li>
            ))
        }
      </ul>
    );
  }
}

export default LinkCard;
