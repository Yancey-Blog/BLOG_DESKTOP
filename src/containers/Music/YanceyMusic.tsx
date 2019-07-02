import * as React from 'react';
import { observer, inject } from 'mobx-react';
import Card from '@components/Music/Card';
import Skeleton from '@components/Skeletons/YanceyMusicSkeleton/Skeletons';
import { IMusicProps, IYanceyMusic } from '../../types/music';

@inject('musicStore')
@observer
class YacneyMusic extends React.Component<IMusicProps, {}> {
  constructor(props: IMusicProps) {
    super(props);
    this.state = {};
  }

  public componentDidMount() {
    const { musicStore } = this.props;
    musicStore!.getYanceyMusic();
  }

  public render() {
    const { musicStore } = this.props;

    return (
      <>
        {musicStore!.isYanceyMusicLoading ? (
          <Skeleton />
        ) : (
          musicStore!.yanceyMusic.map((item: IYanceyMusic) => (
            <Card
              type='yanceyMusic'
              key={item._id}
              url={item.soundCloud_url}
              title={item.title}
              date={item.release_date}
              cover={item.cover}
            />
          ))
        )}
      </>
    );
  }
}

export default YacneyMusic;
