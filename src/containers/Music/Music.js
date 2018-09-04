import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './music.module.css';

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
    return (
      <main className={styles.music_wrapper}>
        https://www.dittomusic.com/blog
      </main>
    );
  }
}

export default LinkCard;
