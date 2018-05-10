import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

class ChildCmp extends React.Component {
  render() {
    return <div> {this.props.childMessage} </div>;
  }
}

class ExampleApplication extends React.Component {
  constructor(props) {
    super(props);
    console.log(`${this.constructor.name} constructor`);
    this.state = { message: 'no message', index: 0 };
  }

  componentWillMount() {
    console.log(`${this.constructor.name} will mount`);
    //...
  }

  componentDidMount() {
    /* setTimeout(()=> {
            this.setState({ message: 'timeout state message' });
        }, 1000); */
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return true;
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    //...
  }

  componentWillReceiveProps(nextProps) {
    //...
  }

  componentWillUnmount() {
    //...
  }

  onClickHandler() {
    const { index } = this.state;
    this.setState({ index: index + 1 });
    this.setState({ index: index + 2 });
  }

  render() {
    return (
      <div>
        <button onClick={this.onClickHandler.bind(this)}>
          {' '}
          set state button{' '}
        </button>
        <ChildCmp childMessage={this.state.index} />
        And some text as well!
      </div>
    );
  }
}

ReactDOM.render(
  <ExampleApplication hello={'world'} />,
  document.getElementById('container'),
  function() {}
);
registerServiceWorker();
