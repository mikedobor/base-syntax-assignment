import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOuput';

class  App extends Component {
  state = {
    username: "Mickedo"
  }

  usernameChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  
  render() {
    return (
      <div className="App">
      <UserInput nameChanged={this.usernameChangeHandler} defaultName={this.state.username} />
      <UserOutput userName={this.state.username} />
      <UserOutput userName="Edobor" />
      </div>
    );
  }
}

export default App;
