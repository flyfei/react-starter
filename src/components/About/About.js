import React, { Component, PropTypes } from 'react';

class About extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  };

  render() {
    return (
      <span>This is {this.props.name}!</span>
    );
  }
}
export default About;
