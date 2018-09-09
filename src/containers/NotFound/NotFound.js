import React, { Component } from 'react';
import './not_found.css';

class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <main className="not_found_wrapper">
        <div className="unicorn"/>
        <div className="container">
          <div className="four-oh-four">
            <h1>
              404 Error
            </h1>
          </div>
          <div className="warning">
            <h2>
              All those moments will be lost in time, like tears in rain.
            </h2>
            <p>
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <button role="button">
              Go Home
            </button>
          </div>
        </div>
      </main>
    );
  }
}

export default NotFound;
