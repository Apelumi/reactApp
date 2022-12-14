import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';

/** const StyledButton = styled.button`
    background-color: ${props => props.anyprop ? 'red': 'yellow'};
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;

    &:hover{
      background-color: ${props => props.anyprop? 'grey': 'blue'};
      color: white;
    }
`;*/

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }



  state = {
    persons: [
      {id: "a1", name : "max", age: 28},
      {id: "a2", name : "maxima", age: 20},
      {id: "a3", name : "maria", age: 29},
    ],
    otherstate : "some other state",
    showname: false,
    showcock: true,
    changeCounter: 0,
    authenticated: false
  }

  //getDerivedStateFromProps(props, state)
  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

 /** componentWillMount(){
    console.log("[App.js] componentWillMount");
  }*/ 

  //After the render methos has run then the componentDidMount() will run
  componentDidMount(){
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("[App.js] getSnapshotBeforeUpdate");
    return {message: "snapped right now!"};
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("[App.js] componentDidUpdate");
    console.log(snapshot);
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


    this.setState((prevState, props) => {
      return {
        persons: newperson,
        changeCounter: prevState.changeCounter++ //ths allows the rendering the actual state correctly
        //this is actually good for setting states that actually depend on your old state
      }
    })
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

  loginHandler = () => {
    this.setState({authenticated: true});
  }
  
  render (){
    console.log("[App.js] render")

    /**const styles = {
      backgroundColor: 'yellow',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'blue',
        color: 'white'
      }
    }*/

    //RENDERING OUR DYNAMIC CONTENT USING CONDITIONAL STATEMENT
    let myperson = null;

    if (this.state.showname === true) {
      myperson = (
        <div>  {/**in here you can as well delete the wrapping div */}
          <Persons 
            persons = {this.state.persons}
            clickdel = {this.deletePersonsHandler}
            changehand = {this.nameChangedHandler}
            isAuthenticate = {this.state.authenticated}/>
            
          {/**{this.state.persons.map((persons, index) => {
            return <Person 
            click = {() => {this.deletePersonsHandler(index)}}
            name= {persons.name} 
            age={persons.age}
            key={persons.id}
            changed ={(event) => this.nameChangedHandler(event, persons.id)}/>
          })} */}
        </div>
      )

      /** btnClass.push(classes.Red) */
      /**styles.backgroundColor = "red"
      styles[':hover'].backgroundColor="grey"

       * styles[':hover'] = {
        backgroundColor: 'grey',
        color: 'black'
      }
       */
    }



    return (
      // <WithClass classes={classes.App}>
      <Aux>
        <button className={classes.Button} type="text" onClick={()=> {this.setState({
          showcock:false
        })}}>cleanupWorkWithuseEffect</button>
        <AuthContext.Provider 
        value={{authenticated: this.state.authenticated,
        login: this.loginHandler}}>
          {this.state.showcock ?
          (<Cockpit 
          title = {this.props.appTitle}
          clicked = {this.togglePersonsHandler}
          showname = {this.state.showname}
          personsLength = {this.state.persons.length}
          />) : null}
        {myperson}
        </AuthContext.Provider>
      </Aux>
      // </WithClass>
    
    );
    /**properties means the atrributes we had to the function component
    return React.CreateElement('div', 
    {className: 'App'}, React.createElement('h1', null, "Does this work now?"))*/
  }
}

export default withClass(App, classes.App);



