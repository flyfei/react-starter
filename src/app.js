import React, { Component } from 'react';
import About from './components/About/About';
import FlexTest from './components';

class App extends Component {

  render() {
    return (
      <div>
        <FlexTest />
        <About name="Mohamad Jahani" />
      </div>
    );
  }
}

export default App;
