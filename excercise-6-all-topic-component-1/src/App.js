
import React from 'react';
import logo from './logo.svg';
import './App.css';
function Form(props){
  return<div><form onSubmit={props.add}><input
    type="text"
    placeholder="Enter New Item"
    value={props.state.value}
    onChange={props.handleChange}
  />
  <button disabled={props.inputIsEmpty()}>Add</button>
  </form>
  <button onClick={props.removeLastItem} disabled={props.noItemsFound()}>Delete Last Item</button>
</div>
  }
  function List(props){
 return<div><p className="items">Item List</p> <ol className="item-list">
  {props.itemList.map((item, index) => <li key={index}>{item}</li>)}
</ol></div>
  }
class App extends React.Component {
  state = {
    value: '',
    itemList: [],
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addNewItem = event => {
    event.preventDefault();
    this.setState(oldState => ({
      itemList: [...oldState.itemList, this.state.value],
    }));
  };

  removeLastItem = event => {
    this.setState(prevState => ({ itemList: this.state.itemList.slice(0, -1) }));
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };
  noItemsFound = () => {
    return this.state.itemList.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Bootcamp - Train the Trainer - Coding Excercise</h1>        
        </header>
        <h2>ToDo List</h2>
        <Form add={this.addNewItem} state={this.state}
        handleChange={this.handleChange} inputIsEmpty={this.inputIsEmpty}
        removeLastItem={this.removeLastItem} noItemsFound={this.noItemsFound}
        /> 
        <List itemList={this.state.itemList}/>
      </div>
    );
  }
}

export default App;


