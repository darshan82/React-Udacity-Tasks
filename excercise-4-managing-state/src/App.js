import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const numQuestions = 0;
const numCorrect = 0;

class App extends Component {
  state={
    number1:Math.floor(Math.random() * 100),
    number2:Math.floor(Math.random() * 100),
    number3:Math.floor(Math.random() * 100),
    
    nu
    }
  
    
   changeQuestion =()=>{
        this.setState(function (state){
   
        return  state.number1 = Math.floor(Math.random() * 100)
      },
      this.setState(function (state){
        
        return  state.number2 = Math.floor(Math.random() * 100)
        
      },
      this.setState(function (state){
       
        return  state.number3 = Math.floor(Math.random() * 100)
        
      },
      this.setState(function (state){
        
        return  state.proposedAnswer = Math.floor(Math.random() * 3)
        
      }
      )
      )))}
   
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Bootcamp - Train the Trainer - Coding Practice</h1>        
	</header>
        <div className="game">
          <h2>ADD THE NUMBERS GAME</h2>
          <div className="equation">
            <p className="text">{`${this.state.number1} + ${this.state.number2} + ${this.state.number3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button>True</button>
          <button onClick={this.changeQuestion}>False</button>
          <p className="text">
            You have answered {numCorrect} question answered correctly out of total {numQuestions} questions.
          </p>
        </div>
      </div>
    );
  }
}

export default App;

