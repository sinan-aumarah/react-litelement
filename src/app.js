import React, { Component } from 'react';
import styled from 'styled-components';
import Select from 'react-select';

const wrapperStyles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];

const MyButton = styled.button`
color: red`

const MySelect = styled(Select)`
color: red;
width: 50%`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicksCounter: 0, focusCounter: 0 };
    this.handleClick = this.handleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

    handleFocus(){
      console.log('called');
        console.log('open');
        this.setState(state => ({
            focusCounter: this.state.focusCounter+1,
        }));
    }

  handleClick() {
    this.setState(state => ({
      clicksCounter: this.state.clicksCounter+1
    }));
  }

  render() {
    return (
      <div style={wrapperStyles}>
        <MyButton onClick={this.handleClick} style={{fontSize: "22px"}} className="buttons">
          Click me: {this.state.clicksCounter}
        </MyButton>
          <input
              className="App-textForm"
              type="text"
              name="color"
              value={this.state.focusCounter}
              onFocus={this.handleFocus} // <--- Open the picker on focus
          />
          <MySelect options={options} />
      </div>
    );
  }
}

export default App;


