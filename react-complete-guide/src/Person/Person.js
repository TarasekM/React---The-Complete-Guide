import React from 'react';
import styled from 'styled-components';

// import './Person.css';


const StyledDiv = styled.div`
    width: 60%;
    margin: 1rem auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 1rem;

    @media (min-width: 500px){
        width: 450px;
    }
`;

const Person = (props) =>{
    return (
    <StyledDiv>
        <p id={props.id} onClick={props.click}>Hi person, I'm {props.name}{props.children}. {props.age} years young.</p>
        <input type="text" value={props.name} onChange={props.changed}/>
    </StyledDiv>
    )
};

export default Person;