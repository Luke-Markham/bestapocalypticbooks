import React from 'react';
class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    // process the error
    return { hasErrored: true };
  }
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <div className="error-boundary-container">
          <img src="https://i.imgur.com/yW2W9SC.png" alt="broke page" />
          <p>Sorry, this page is broken!</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
