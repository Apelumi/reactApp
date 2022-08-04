import React from "react";
import "./Person.css";
import styled from 'styled-components';

const StyleDiv = styled.div`
width: 60%;
        margin: 16px auto;
        border: 1px solid #eee;
        box-shadow: 0px 2px 3px #ccc;
        padding: 16px;
        text-align: center;
        
        '@media (min-width:500px)': {
            width: '450px'
        }`

const person = (props) => {
    /**const styles = {
        '@media (min-width:500px)': {
            width: '450px'
        } 
    };
    */
    return (
        //<div className="Person" style={styles}>
        <StyleDiv>
            <p onClick={props.click}>I'm a {props.name} and i'm {props.age}years old</p>
            <p>{props.children}</p>
            {/** this is two way binding */}
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyleDiv>
        //</div>
    )
}

export default person;