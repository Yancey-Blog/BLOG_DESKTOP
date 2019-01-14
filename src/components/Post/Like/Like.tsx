import * as React from 'react';
import { observer, inject } from 'mobx-react';
import './Like.scss';
import { IArticleProps } from '../../../types/article';

@inject('articleStore')
@observer
class Like extends React.Component<IArticleProps, {}> {
  constructor(props: IArticleProps) {
    super(props);
    this.state = {};
  }

  public render() {
    const { articleStore } = this.props;
    return (
      <div className='like_wrapper'>
        <input
          id='toggle-heart'
          type='checkbox'
          defaultChecked={articleStore!.isLiked}
          onChange={articleStore!.handleLikes}
        />
        <label htmlFor='toggle-heart'>❤</label>
        <span className='like_number'>
          {articleStore!.likeNum} {articleStore!.likeNum > 1 ? 'likes' : 'like'}
        </span>
      </div>
    );
  }
}

export default Like;
