import React, { Component } from 'react';
import './App.css';

const childs = [['A', 'B', 'C', 'D'], ['B', 'A', 'D', 'C']];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childs,
      index: 0,
    };
  }
  onClick = () => {
    const index = (this.state.index + 1) % 2;
    this.setState({ index });
  };
  render() {
    const { childs, index } = this.state;
    return (
      <div className="App" onClick={this.onClick}>
        {childs[index].map((val, i) => <div key={val}>{val}</div>)}
      </div>
    );
  }
}

export default App;
