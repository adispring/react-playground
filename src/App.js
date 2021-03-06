import React, { Component } from 'react';
import './App.css';
import A from './A';
import B from './B';
import C from './C';

class App extends Component {
  constructor(props) {
    super(props);
    console.log(`${this.constructor.name} constructor`);
  }
  componentWillMount() {
    console.log(`${this.constructor.name} will mount`);
  }
  componentDidMount() {
    console.log(`${this.constructor.name} did mount`);
  }
  onClick = () => {
    console.log(`${this.constructor.name} click`);
  };
  render() {
    return (
      <div className="App">
        <div>Hello World</div>
      </div>
    );
  }
}

export default App;
