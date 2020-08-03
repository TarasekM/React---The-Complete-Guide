import React, {Component} from 'react';

import Person from '../components/Persons/Person/Person';

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
    // const persons = this.state.personList.slice();
    const persons = [...this.state.personList];
    persons.splice(personIndex, 1);
    this.setState({personList: persons});
  }

  getPersonList = () => {
    const personList = this.state.personList.map((person, index) => {
      return <Person
        key={person.id}
        id={person.id}
        name={person.name}
        age={person.age}
        click={this.deletePersonHandler.bind(this, index)}
        changed={(event) => this.nameChangeHandler(event, person.id)}/>
      }
    );
    return personList;
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons : !doesShow });
  }
  
  render(){
    let persons = null;
    let buttonClass = [styles.Button]
    if (this.state.showPersons === true){
      persons = (
        <div>
          {this.getPersonList()}
        </div>
      );
      buttonClass.push(styles.Red);
    }

    let classes = [];
    if (this.state.personList.length <= 2){
      classes.push(styles.TextRed);
    }
    if (this.state.personList.length <= 1){
      classes.push(styles.Bold);
    }

    return(
      <div className={styles.App}>
        <h1>First change on Page.</h1>
        <div>
          <p className={classes.join(' ')}>A list of people.</p>
          <p>And the second one.</p> 
        </div>
        <div>
          <button className={buttonClass.join(' ')} onClick={this.togglePersonsHandler}>
            Toggle the Name
          </button>
          { persons }
        </div>
      </div>
    )
  }
}

export default App;
