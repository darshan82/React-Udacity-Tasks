import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App2 extends Component {
  state={
    text2:'',
   display:null

  }
  renderModal=()=>{
      if(this.state.display===true){
        return(
            <div> {this.state.text2} has played 0 games!</div>
          )
      }else if(this.state.display===false){
        return(
            <div> </div>
          )
      }else if(this.state.display===null){
        return(
            <div> </div>
          )
      }
      
  }
  renderDisp=()=>{
      if(this.state.display===true){
        this.setState({"display":false})
        console.log(this.state.text2)
      }
      else if(this.state.display===false){
        this.setState({"display":true})
      }else if(this.state.display===null){
        this.setState({"display":true})
      }
  }
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Bootcamp - Train the Trainer - Coding Excercise</h1>        
        </header>
        
        <input type="text" onInput={(text)=>{this.setState({'text2':text})}}></input>
        <input type="button" onClick={()=>this.renderDisp()}></input>
       {this.renderModal}
      </div>
    );
  }
}

export default App2;

