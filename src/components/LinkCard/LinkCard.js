import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './linkCard.module.css';

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
    const { data } = this.props;
    return (
      <ul className={styles.card_list}>
        {
          Object.keys(data)
            .map(key => (
              <li className={styles.card_item} key={key}>
                <Link to={`/p/${data[key]._id}`}> {/*eslint-disable-line*/}
                  <span
                    className={styles.card_bg}
                    style={{ backgroundImage: `url(${data[key].poster}?x-oss-process=image/resize,w_360/quality,Q_90)` }}
                  />
                  <span className={styles.card_content}>
                    <span>
                      <span className={styles.card_title}>
                        {data[key].title}
                      </span>
                      <span className={styles.card_url}>
                      https://www.yanceyleo.com/
                      </span>
                    </span>
                    <span className={styles.card_img_cell}>
                      <img src={`${data[key].poster}?x-oss-process=image/resize,w_360/quality,Q_90`} alt={data[key].title} />
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
