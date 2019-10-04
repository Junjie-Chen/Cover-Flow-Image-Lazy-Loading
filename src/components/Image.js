import React, { Component } from 'react';

class Image extends Component {
  render() {
    const { alt } = this.props;

    return <img className="coverflow__cover__25-7e" alt={alt} />;
  }
}

export default Image;
