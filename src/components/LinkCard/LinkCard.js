import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './linkCard.module.css';
import { GET } from '../../https/axios';

class LinkCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.getData();
  }

  componentWillUnmount() {
  }

  getData() {
    GET('/articlesByPV', {})
      .then((res) => {
        console.log(res.data)
        this.setState({
          dataSource: res.data,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  render() {
    const { dataSource } = this.state;
    return (
      <ul>
        {
          Object.keys(dataSource)
            .map(key => (
              <li className={styles.card_item} key={key}>
                <Link to={`/p/${dataSource[key]._id}`}> {/*eslint-disable-line*/}
                  <span
                    className={styles.card_bg}
                    style={{ backgroundImage: `url(${dataSource[key].header_cover}?x-oss-process=image/resize,w_360/quality,Q_90)` }}
                  />
                  <span className={styles.card_content}>
                    <span>
                      <span className={styles.card_title}>
                        {dataSource[key].title}
                      </span>
                      <span className={styles.card_url}>
                      https://www.yanceyleo.com/
                      </span>
                    </span>
                    <span className={styles.card_img_cell}>
                      <img src={`${dataSource[key].header_cover}?x-oss-process=image/resize,w_360/quality,Q_90`} alt={dataSource[key].title} />
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
