import React, { Component } from 'react';

class B extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    console.log(`${this.constructor.name} constructor`);
  }
  componentWillMount() {
    console.log(`${this.constructor.name} will mount`);
  }
  componentDidMount() {
    console.log(`${this.constructor.name} did mount`);
  }
  onClick = () => {
    const index = this.state.index + 1;
    this.setState({ index });
    console.log(`${this.constructor.name} click`);
  };
  render() {
    return (
      <div className="B" onClick={this.onClick}>
        {this.state.index}
      </div>
    );
  }
}

export default B;
