import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react/index';
import styles from './tag.module.css';

@inject('articleStore')
@observer
class Tag extends Component {
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
      <ul className={styles.tags}>
        {
        Object.keys(articleStore.TagData)
          .map(key => (
            <li
              key={key}
            >
              <Link
                to={`/t/${articleStore.TagData[key]}`}
              >
                {articleStore.TagData[key]}
              </Link>
            </li>
          ))
      }
      </ul>
    );
  }
}

export default Tag;
