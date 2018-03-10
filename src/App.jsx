import React, { Fragment } from 'react';
import Header from './Header.jsx';
import Counter from './Counter.jsx';


class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header
          title='Hello'
          subtitle='World'
        />

        <Counter/>
      </Fragment>
    );
  }
}

export default App;
