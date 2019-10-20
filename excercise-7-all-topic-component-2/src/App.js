import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
function Name(props){
  if(props.counter>=0){
  if(props.counter%2==0){
    return <div><input type="text" 
    value={props.value} 
    onChange={props.onChange}/>
  <button onClick={props.onClick} >click</button> <p>{props.name} has played 0 games.</p>
   </div> 
  }else if (props.counter%2!=0){
    return <div><input type="text" 
    value={props.value} 
    onChange={props.onChange}/>
  <button onClick={props.onClick} >click</button> <p>{props.name} has played * games.</p>
   </div> 
  }
  }else{
    return <div><input type="text" 
    value={props.value} 
    onChange={props.onChange}/>
  <button onClick={props.onClick} >click</button></div>
  }
  
}
class App extends Component {
  state={
    text:'',
    value:'',
    counter:-1

  }
  handleChange = event => {
    this.setState({ text: this.state.value}),
    this.setState((state)=>{
      state.counter=state.counter+1;
    })
  };

  addName= (e)=>{
      this.setState({value:e.target.value
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Bootcamp - Train the Trainer - Coding Excercise</h1>        
        </header>
        
        <Name name={this.state.text} counter={this.state.counter} onClick={this.handleChange}
        onChange={this.addName}  value={this.state.value}
       />
      </div>
    );
  }
}

export default App;

