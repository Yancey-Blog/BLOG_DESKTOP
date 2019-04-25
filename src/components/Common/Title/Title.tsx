import * as React from 'react';
import Helmet from 'react-helmet';

export interface ITitleProps {
  title: string;
}

class Title extends React.Component<ITitleProps, {}> {
  constructor(props: ITitleProps) {
    super(props);
    this.state = {};
  }

  public render() {
    const { title } = this.props;

    return (
      <Helmet>
        <title>{title} | Yancey Inc.</title>
      </Helmet>
    );
  }
}

export default Title;
