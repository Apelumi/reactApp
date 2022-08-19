import React from "react";
import Person from './Person/Person'

const persons = (props) => props.persons.map((persons, index) => {
    return <Person 
    click = {() => {props.clickdel(index)}}
    name= {persons.name} 
    age={persons.age}
    key={persons.id}
    changed ={(event) => props.changehand(event, persons.id)}/>
  });

export default persons;