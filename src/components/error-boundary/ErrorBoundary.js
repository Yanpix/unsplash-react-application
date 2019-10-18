import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? <div>Something went wrong!</div> : children;
  }
}

ErrorBoundary.propTypes = {
  children: propTypes.node.isRequired,
};
