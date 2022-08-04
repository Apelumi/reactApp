import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: "a1", name : "max", age: 28},
      {id: "a2", name : "maxima", age: 20},
      {id: "a3", name : "maria", age: 29},
    ],
    otherstate : "some other state",
    showname: false
  }

  // we updated this handler for the person into which input field we typed 
  //now we are finding that one single person index by using the findindex() method we want to call
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(pInput => {
      return pInput.id === id;
    })
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    //now we need to update the array at the position 
    const newperson = [...this.state.persons]; // creation of a new copy of persons to make newpersons to be useful and non-mutating
    newperson[personIndex] = person


    this.setState({persons: newperson})
  }

  togglePersonsHandler = () => {
    const doeshow = this.state.showname; 
    this.setState({showname: !doeshow})
  }

  deletePersonsHandler = (personIndex) => {
    const persons = [...this.state.persons];//another good way of doing this without mutating the objects is by using the SPLICE() method
    persons.splice(personIndex, 1) //splicing the persons object here has already made me mutate the original data here
    this.setState({persons: persons})
  }
  
  render (){
    const styles = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    //RENDERING OUR DYNAMIC CONTENT USING CONDITIONAL STATEMENT
    let myperson = null;
    if (this.state.showname === true) {
      myperson = (
        <div>
          {this.state.persons.map((persons, index) => {
            return <Person 
            click = {() => {this.deletePersonsHandler(index)}}
            name= {persons.name} 
            age={persons.age}
            key={persons.id}
            changed ={(event) => this.nameChangedHandler(event, persons.id)}/>
          })}
        </div>
      )
    }
    return (
      <div className="App">
        <h1>Hi, I am A react</h1>
        <p>This is really working!!!</p>
        <button onClick={this.togglePersonsHandler}
        style={styles}>Toggle persons</button>
        {myperson}
      </div>
    );
    //properties means the atrributes we had to the function component
    // return React.CreateElement('div', {className: 'App'}, React.createElement('h1', null, "Does this work now?"))
  }
    
  
}

export default App;



