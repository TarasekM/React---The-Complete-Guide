import React from 'react';

const Person = (props) =>{
    return (
    <div>
        <p id={props.id} onClick={props.click}>Hi person, I'm {props.name}{props.children}. {props.age} years young.</p>
        <input type="text" value={props.name} onChange={props.changed}/>
    </div>
    )
};

export default Person;