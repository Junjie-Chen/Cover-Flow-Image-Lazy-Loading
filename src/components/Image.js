import React, { Component } from 'react';

class Image extends Component {
  render() {
    const { alt } = this.props;

    return <img alt={alt} />;
  }
}

export default Image;
