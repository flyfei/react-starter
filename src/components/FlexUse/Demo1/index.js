import React, { Component } from 'react';
import './index.scss';

class Demo1 extends Component {
  render () {
    return (
      <div>
        <h3></h3>
        <span className={'base-container flex-container'}>
          <span className={'base-item flex-item'}>1</span>
          <span className={'base-item flex-item'}>2</span>
          <span className={'base-item flex-item'}>3</span>
        </span>
        <div></div>
      </div>
    );
  }
}
export default Demo1;
