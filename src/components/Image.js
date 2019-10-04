import React, { Component } from 'react';

class Image extends Component {
  target = React.createRef();

  createObserver = () => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0
    };

    this.observer = new IntersectionObserver(this.handleIntersect, options);

    this.observer.observe(this.target.current);
  };

  render() {
    const { alt } = this.props;

    return <img ref={this.target} className="coverflow__cover__25-7e" alt={alt} />;
  }
}

export default Image;
