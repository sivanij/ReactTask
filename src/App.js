import React from 'react';
import Login from './Login';
import { 
  withRouter 
} from 'react-router-dom';

require('../node_modules/antd/dist/antd.css')

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  counter = () => {
    this.setState({ 
      count: this.state.count + 1 
    })
  }

  componentDidMount = () => {
    // console.log(this.props.history)
  }

  render() {
    const { count } = this.state
    return (
      <div>
          {/* {count > 0 && <p>You clicked {count} times</p>}
          {count === 0 && <p>Please click below button</p>}
          <button onClick={this.counter}>
            Click me
          </button> */}
          <Login 
            history={this.props.history}
          />
      </div>
    );
  }
}

export default withRouter(App);