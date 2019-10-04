import React, { Component } from 'react';

class Image extends Component {
  target = React.createRef();

  componentDidMount() {
    this.createObserver();
  }

  createObserver = () => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0
    };

    this.observer = new IntersectionObserver(this.handleIntersect, options);

    this.observer.observe(this.target.current);
  };

  handleIntersect = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const { src } = this.props;

        const image = entry.target;

        image.src = src;

        observer.unobserve(image);
      }
    });
  };

  render() {
    const { alt } = this.props;

    return <img ref={this.target} className="coverflow__cover__25-7e" alt={alt} />;
  }
}

export default Image;
