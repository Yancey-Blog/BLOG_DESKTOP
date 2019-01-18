import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import styles from './Tag.module.scss';
import routePath from '@constants/routePath';
import { IArticleProps } from '../../../types/article';

@inject('articleStore')
@observer
class Tag extends React.Component<IArticleProps, {}> {
  constructor(props: IArticleProps) {
    super(props);
    this.state = {};
  }

  public render() {
    const { articleStore } = this.props;
    return (
      <ul className={styles.tags}>
        {articleStore!.tags.map((item, index) => (
          <li key={index}>
            <Link to={`${routePath.tag}${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default Tag;
