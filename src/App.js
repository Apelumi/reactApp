import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name : "max", age: 28},
      {name : "maxima", age: 20},
      {name : "maria", age: 29},
    ],
    otherstate : "some other state"
  }

  switchStateHandler = (newName) => {
    this.setState({
      persons: [
        {name : "maximilliano", age: 30},
        {name : newName, age: 50},
        {name : "madonna", age: 60}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name : "max", age: 30},
        {name : "maxima", age: 50},
        {name : event.target.value, age: 60}
      ]
    })
  }
  
  render (){
    const styles = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi, I am A react</h1>
        <p>This is really working!!!</p>
        <button onClick={() => this.switchStateHandler("mommy")}
        style={styles}>Switch name</button>
        <div>
          <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>
          <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}/>
          <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age} 
          click = {this.switchStateHandler.bind(this, "halimat")}
          changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
        </div>
      </div>
    );
    //properties means the atrributes we had to the function component
    // return React.CreateElement('div', {className: 'App'}, React.createElement('h1', null, "Does this work now?"))
  }
    
  
}

export default App;



