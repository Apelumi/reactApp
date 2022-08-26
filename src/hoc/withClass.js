import React from "react";

// const withClass = (props) => (
//     <div className={props.classes}>
//         {props.children}
//     </div>
// );
    
const withClass = (WrappedComponent, usedProperty) => {
    return (props) => (
        <div className={usedProperty}>
            <WrappedComponent {...props} />
        </div>
    );
}

export default withClass;