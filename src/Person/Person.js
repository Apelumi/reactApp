import React from "react";
import Radium from "radium";
import "./Person.css"

const person = (props) => {
    const styles = {
        '@media (min-width:500px)': {
            width: '450px'
        } 
    };
    return (
        <div className="Person" style={styles}>
            <p onClick={props.click}>I'm a {props.name} and i'm {props.age}years old</p>
            <p>{props.children}</p>
            {/** this is two way binding */}
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default Radium(person);