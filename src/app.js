import React, { Component } from 'react';
import About from './components/About/About';
import FlexUse from './components/FlexUse';

class App extends Component {

  render() {
    return (
      <div>
        <FlexUse />
        <About name="Mohamad Jahani" />
      </div>
    );
  }
}

export default App;
