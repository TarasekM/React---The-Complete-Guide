import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';


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
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '0.5rem',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons === true){
      persons = (
        <div>
          {this.getPersonList()}
        </div>
      )
    }

    return(
      <div className="App">
        <h1>First change on Page.</h1>
        <div>
          <p>Just a paragraph.</p>
          <p>And the second one.</p> 
        </div>
        <div>
          <button
            style={buttonStyle}
            onClick={this.togglePersonsHandler}>Toggle the Name</button>
          { persons }
        </div>
      </div>
    )
  }
}

export default App;
