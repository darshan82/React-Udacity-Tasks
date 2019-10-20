import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={
    text:""
  }
  getText=(event)=>{
    const value=event.target.value
    this.setState(function(){return this.state.text=value}
    
    )
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Bootcamp - Train the Trainer - Coding Excercise</h1>        
        </header>
        <div className="container">
          <input type="text" placeholder="Write your text here" value={this.state.text} onChange={this.getText}/>
          <p className="echo">You are saying:</p>
          <p>{this.state.text}</p>
        </div>
      </div>
    );
  }
}

export default App;

