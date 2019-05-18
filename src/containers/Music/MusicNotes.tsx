import * as React from 'react';
import { observer, inject } from 'mobx-react';
import Card from 'components/Music/Card';
import Skeleton from 'components/Skeletons/YanceyMusicSkeleton/Skeletons';
import { IMusicProps } from '../../types/music';
import { IArticleDetail } from '../../types/article';

@inject('articleStore')
@observer
class MusicNotes extends React.Component<IMusicProps, {}> {
  constructor(props: IMusicProps) {
    super(props);
    this.state = {};
  }

  public componentWillMount() {
    const { articleStore } = this.props;
    articleStore!.posts = [];
  }

  public componentDidMount() {
    const { articleStore } = this.props;
    articleStore!.getPostsByTag('Music');
  }

  public render() {
    const { articleStore } = this.props;
    return (
      <>
        {articleStore!.isSummaryLoading ? (
          <Skeleton />
        ) : (
          articleStore!.posts.map((item: IArticleDetail) => (
            <Card
              type="note"
              key={item._id}
              url={item._id}
              title={item.summary}
              date={item.publish_date}
              cover={item.header_cover}
            />
          ))
        )}
      </>
    );
  }
}

export default MusicNotes;
