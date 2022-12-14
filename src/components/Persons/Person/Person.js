import React, {Component} from "react";
import PropTypes from "prop-types"

import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";
import classes from "./Person.css";
import AuthContext from "../../../context/auth-context";
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
    constructor(props){
        super(props)
        this.inputElementRef = React.createRef()
    }

    static contextType = AuthContext

    componentDidMount(){
        // this.inputElement.focus()
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated)
    }
    render() {
        console.log("[App.js] rendering...");
        return (
            //<div className="Person" style={styles}>
            // <div className={classes.Person}>
            <Aux>
                {this.context.authenticated ? <p>authenticated</p> : <p>Please log in</p>}
                <p onClick={this.props.click}>I'm a {this.props.name} and i'm {this.props.age}years old</p>
                <p>{this.props.children}</p>
                {/** this is two way binding */}
                <input type="text"
                //this is the first way to go about passing refs 
                //ref={(inputEl) => {this.inputElement = inputEl}}
                //this is the second way to go about passing refs 
                ref={this.inputElementRef}
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

//field data types and properties type settings
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);