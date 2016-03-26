import { Component, PropTypes } from 'react';

class Test extends Component {
  render() {
    return (
      <span>This is aaa!</span>
    );
  }
}
Test.PropTypes = {
  name: PropTypes.string
};
Test.defaultProps = {
  name: 'PropTypes.string'
};
export default Test;
