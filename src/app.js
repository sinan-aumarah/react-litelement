import React, { Component } from 'react';

const wrapperStyles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicksCounter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      clicksCounter: this.state.clicksCounter+1
    }));
  }

  render() {
    return (
      <div style={wrapperStyles}>
        <button onClick={this.handleClick} style={{fontSize: "22px"}}>
          Click me: {this.state.clicksCounter}
        </button>
      </div>
    );
  }
}

export default App;


