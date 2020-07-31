import React from 'react';
import './Validation.css';

const Validation = (props) => {
    let validationText = "Text too short";
    if (props.length >= 5){
        validationText = "Text long enough";
    } 
    return (

        <div className='Validation'>
            {validationText}
        </div>
    );
}

export default Validation;