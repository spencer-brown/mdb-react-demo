import React, { Fragment } from 'react';


class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  incrementCount() {
    this.setState(function(prevState) {
      return {
        count: prevState.count + 1
      };
    });
  }

  render() {
    return (
      <Fragment>
        <button
          onClick={this.incrementCount.bind(this)}
        >
          Increment
        </button>

        <p>Count:</p>
        <p>{this.state.count}</p>

        {(this.state.count % 2 === 0) &&
          <p>It's even!</p>
        }
      </Fragment>
    );
  }
}

export default Counter;
