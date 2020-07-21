import React from 'react';

const Person = (props) =>{
    return (
    <div>
        <p>Hi person, I'm {props.name}{props.children}. {props.age} years young.</p>
    </div>
    )
};

export default Person;