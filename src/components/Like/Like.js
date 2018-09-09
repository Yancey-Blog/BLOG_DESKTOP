import React, { Component } from 'react';
import './like.css';

class Like extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="like_wrapper">
        <input id="toggle-heart" type="checkbox" />
        <label htmlFor="toggle-heart"> {/* eslint-disable-line */}
          ❤
        </label>
        <span className="like_number">
          10 likes
        </span>
      </div>
    );
  }
}

export default Like;
