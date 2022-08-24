import React, {Component} from "react";
import Aux from "../../../hoc/Aux";
import classes from "./Person.css";
/** import styled from "styled-components"; 

const StyleDiv = styled.div`
        width: 60%;
        margin: 16px auto;
        border: 1px solid #eee;
        box-shadow: 0px 2px 3px #ccc;
        padding: 16px;
        text-align: center;
        
        @media (min-width:500px){
            width: 450px;
        }` */
class Person extends Component {
    render() {
        console.log("[App.js] rendering...");
        return (
            //<div className="Person" style={styles}>
            // <div className={classes.Person}>
            <Aux>
                <p onClick={this.props.click}>I'm a {this.props.name} and i'm {this.props.age}years old</p>
                <p>{this.props.children}</p>
                {/** this is two way binding */}
                <input type="text" 
                onChange={this.props.changed} 
                value={this.props.name}/>
            </Aux>
            // </div>
            //</div>
        );  
    }
}

/**  const person = (props) => {
    console.log("[App.js] rendering...");
    /**const styles = {
        '@media (min-width:500px)': {
            width: '450px'
        } 
    };
    */
    /** return (
        //<div className="Person" style={styles}>
        <div className={classes.Person}>
            <p onClick={props.click}>I'm a {props.name} and i'm {props.age}years old</p>
            <p>{props.children}</p> */
            /** this is two way binding */ 
           /**  <input type="text" onChange={props.changed} value={props.name}/>
        </div>
        //</div>
    ) 
} */
export default Person;