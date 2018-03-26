import React from 'react';

import Header from './Header';

class App extends React.Component {
  constructor() {
    super();
    this.state = {},
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log('Click!');
  }

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.handleClick}
        > Get Latest Block </button>
      </div>
    );
  }
}

export default App;
