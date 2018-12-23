import React from 'react';
import Location from './Location.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Location />
      </div>
    );
  }
}

export default App;
