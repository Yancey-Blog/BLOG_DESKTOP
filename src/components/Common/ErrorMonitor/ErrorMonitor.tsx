import * as React from 'react';
import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: 'https://2998f0f7a05044969a7859a2596e6977@sentry.io/1468725',
});

interface IErrorMonitorState {
  error: any;
  eventId: any;
}

class ErrorMonitor extends React.Component<{}, IErrorMonitorState> {
  constructor(props: {}) {
    super(props);
    this.state = { error: null, eventId: null };
  }

  public componentDidCatch(error, errorInfo) {
    this.setState({ error });
    Sentry.withScope(scope => {
      scope.setExtras(errorInfo);
      const eventId = Sentry.captureException(error);
      this.setState({ eventId });
    });
  }

  public render() {
    if (this.state.error) {
      return (
        <a
          onClick={() =>
            Sentry.showReportDialog({ eventId: this.state.eventId })
          }
        >
          Report feedback
        </a>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorMonitor;
