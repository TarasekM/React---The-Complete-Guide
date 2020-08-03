import React from 'react';
import Person from './Person/Person';


const Persons = (props) => {
  const persons = props.personList.map((person, index) => {
    return <Person
      key={person.id}
      id={person.id}
      name={person.name}
      age={person.age}
      click={props.clicked.bind(this, index)}
      changed={(event) => props.changed(event, person.id)}/>
  });

  return props.show === true ? persons : null;
};

export default Persons;