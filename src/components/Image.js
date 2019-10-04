import React, { Component } from 'react';

class Image extends Component {
  target = React.createRef();

  render() {
    const { alt } = this.props;

    return <img ref={this.target} className="coverflow__cover__25-7e" alt={alt} />;
  }
}

export default Image;
