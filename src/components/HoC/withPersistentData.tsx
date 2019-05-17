import React from 'react';
import IPersistent from '../../types/presistent';

const withPersistentData = (PersistentComponent: any) => {
  return class extends React.Component<{}, IPersistent> {
    public componentWillMount() {
      const isWebp = window.localStorage.getItem('isWebp') === 'true';
      this.setState({ isWebp });
    }

    public render() {
      const { isWebp } = this.state;
      return <PersistentComponent isWebp={isWebp} {...this.props} />;
    }
  };
};

export default withPersistentData;
