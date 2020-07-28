import React from 'react';

import './Person.css';

const Person = (props) =>{
    return (
    <div className="Person">
        <p id={props.id} onClick={props.click}>Hi person, I'm {props.name}{props.children}. {props.age} years young.</p>
        <input type="text" value={props.name} onChange={props.changed}/>
    </div>
    )
};

export default Person;