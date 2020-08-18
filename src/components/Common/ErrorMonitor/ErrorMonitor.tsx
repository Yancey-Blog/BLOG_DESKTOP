import * as React from 'react';
import * as Sentry from '@sentry/browser';
import { sentryDNS } from '@constants/constants';

Sentry.init({
  dsn: sentryDNS,
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
    Sentry.withScope((scope) => {
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
