import React, {useEffect, useRef} from "react";
import classes from "./cockpit.css";

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  useEffect(()=> {
    console.log("[Cockpit.js] this is useEffect react hook and this is not a lifecycle hook");
    //some http request
    //now we are controlling the useEffect nehaviour
    const timer = setTimeout(()=> {
      alert("your data is saved to the cloud")
    }, 1000);
    toggleBtnRef.current.click();
    //you can do a clean up work here and this function will run after every rendered cycle
    return () => {
      clearTimeout(timer);
      console.log("[cockpit.js] rendered clean up work in useEffect")
    }
  }, //this will rerendered only when the persons attributes is changed
  //[props.persons] otherwise if no particlar rendering based changes
  []);
  useEffect(()=>{
    console.log("[cockpit.js] data is not saved to the cloud");

    return ()=>{
      console.log("[cockpit.js] rendered clean up work 2nd time using useEffect");
    }
  });

  const Textclass = [];
  let btnClass = "";
  if (props.showname === true){
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2){
    Textclass.push(classes.red);
  }
  if (props.personsLength <=1){
    Textclass.push(classes.bold);
  }
  if(props.personsLength === 1){
    Textclass.push(classes.bolder);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={Textclass.join( " " )}>This is really working!!!</p>
      <button ref={toggleBtnRef} className={btnClass} 
      onClick={props.clicked}>Toggle persons</button>
    </div>
  );
};

export default React.memo(Cockpit);
