import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErrored: false,
    };
  }

  handleGoBack() {
    this.props.history.goBack();
    setTimeout(() => {
      window.location.reload();
    }, 100);
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
          <img
            className="error-boundary-image"
            src="https://i.imgur.com/yW2W9SC.png"
            alt="broke page"
          />
          <p className="error-boundary-text">
            Sorry, this page is broken! Please go back
            <br />
            <span onClick={() => this.handleGoBack()}>X0x0</span>
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
