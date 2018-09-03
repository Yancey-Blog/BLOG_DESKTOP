import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './tag.module.css';

class Tag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['JavaScript', '山本彩', '卒業おめてとう', 'Yancey', 'CSS3', 'React', 'ゆく年、くる年'],
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    const { data } = this.state;
    return (
      <ul className={styles.tags}>
        {
          Object.keys(data).map(key => (
            <li key={key}>
              <Link to="/blog">
                {data[key]}
              </Link>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default Tag;
