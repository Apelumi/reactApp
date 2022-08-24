import React, {PureComponent} from "react";
import Person from './Person/Person'

//this code is converted to class component 
//because of the lifecycle components hooks when updating at props changes
class Persons extends PureComponent {
  /** static getDerivedStateFromProps(props, state){
    console.log("[Persons.js] getDerivedStateFromProps");
    return state;
  } */

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log("[Persons.js] shouldComponentUpdate");
  //   //this below code check is to check for performance when nothing in the persons.js gets touched
  //   if(
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changehand !== this.props.changehand ||
  //     nextProps.clickdel !== this.props.clickdel
  //     ){
  //     return true;
  //   } else{
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return {message: "snapsot taken"};
  }

  //after the render has rendered it's jsx code and it's childcomponent
  //the componentDidUpdate will run
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("[Persons.js] componetDidUpdate");
    console.log(snapshot);
  }

  componentWillUnmount(){
    console.log("[Persons.js] did componentWillUnmount");
  } //anycode here will rendered right before this component is removed


  render() {
    console.log("[App.js] rendering")
    return (this.props.persons.map((persons, index) => {
      return <Person 
      click = {() => {this.props.clickdel(index)}}
      name= {persons.name} 
      age={persons.age}
      key={persons.id}
      changed ={(event) => this.props.changehand(event, persons.id)}/>
    }))
  }
}
/** const persons = (props) => 
  {
    console.log("[App.js] rendering")
    return props.persons.map((persons, index) => {
      return <Person 
      click = {() => {props.clickdel(index)}}
      name= {persons.name} 
      age={persons.age}
      key={persons.id}
      changed ={(event) => props.changehand(event, persons.id)}/>
    })
}; */

export default Persons;