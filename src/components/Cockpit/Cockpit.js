import React from "react";
import classes from "./cockpit.css";

const cockpit = (props) => {
  const Textclass = [];
  let btnClass = "";
  if (props.showname === true){
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2){
    Textclass.push(classes.red);
  }
  if (props.persons.length <=1){
    Textclass.push(classes.bold);
  }
  if(props.persons.length === 1){
    Textclass.push(classes.bolder);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={Textclass.join( " " )}>This is really working!!!</p>
      <button className={btnClass} 
      onClick={props.clicked}>Toggle persons</button>
    </div>
  );
};

export default cockpit;
