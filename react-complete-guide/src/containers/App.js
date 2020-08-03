import React, {Component} from 'react';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

import styles from './App.module.css';


class App extends Component{
  state = {
    personList: [
      { id: "0000-0000-0000-0000", name: "Mateusz", age: 25},
      { id: "0000-0000-0000-0001", name: "Jan", age: 27},
      { id: "0000-0000-0000-0002", name: "Tirion", age: 54}
    ],
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.personList.findIndex(p => p.id === id);
    
    const person = {
      ...this.state.personList[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.personList];

    persons[personIndex] = person;

    this.setState(
      { personList: persons}
    );
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.personList];
    persons.splice(personIndex, 1);
    this.setState({personList: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons : !doesShow });
  }
  
  render(){
    return(
      <div className={styles.App}>
        <Cockpit
          personList={this.state.personList}
          show={this.state.showPersons}
          toggle={this.togglePersonsHandler}
        />
        <Persons
          show={this.state.showPersons}
          personList={this.state.personList}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      </div>
    )
  }
}

export default App;
