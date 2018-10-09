import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './tag.module.css';
import { GET } from '../../https/axios';

class Tag extends Component {
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
    GET('/allTags', {})
      .then((res) => {
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
      <ul className={styles.tags}>
        {
        Object.keys(dataSource)
          .map(key => (
            <li key={key}>
              <Link to={`/t/${dataSource[key]}`}>
                {dataSource[key]}
              </Link>
            </li>
          ))
      }
      </ul>
    );
  }
}

export default Tag;
