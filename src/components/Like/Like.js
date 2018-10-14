import React, { Component } from 'react';
import './like.css';
import { inject, observer } from 'mobx-react/index';

@inject('articleStore')
@observer
class Like extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { articleStore } = this.props;
    return (
      <div className="like_wrapper">
        <input
          id="toggle-heart"
          type="checkbox"
          defaultChecked={articleStore.isLiked}
          onChange={articleStore.handleLikes}
        />
        <label htmlFor="toggle-heart"> {/* eslint-disable-line */}
          ❤
        </label>
        <span className="like_number">
          {articleStore.likeNum}
          {' '}
          {articleStore.likeNum > 1 ? 'likes' : 'like'}
        </span>
      </div>
    );
  }
}

export default Like;
