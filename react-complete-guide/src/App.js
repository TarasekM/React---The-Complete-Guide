import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component{
  state = {
    personList: [
      { id: "0000-0000-0000-0000", name: "Mateusz", age: 25},
      { id: "0000-0000-0000-0001", name: "Jan", age: 27},
      { id: "0000-0000-0000-0002", name: "Tirion", age: 54}
    ]
  }

  render(){
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '0.5rem',
      cursor: 'pointer'
    };

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
            onClick={this.switchNameHandler.bind(this, 'Davel')}>Switch the Name</button>
          {this.getPersonList()}
        </div>
      </div>
    )
  }

  switchNameHandler = (newName) => {
    this.setState({
      personList: [
        { id: "0000-0000-0000-0000", name: newName, age: 25},
        { id: "0000-0000-0000-0001", name: "Jan", age: 27},
        { id: "0000-0000-0000-0002", name: "Tirion", age: 54}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      personList: [
        { id: "0000-0000-0000-0000", name: event.target.value, age: 25},
        { id: "0000-0000-0000-0001", name: "Jan", age: 27},
        { id: "0000-0000-0000-0002", name: "Tirion", age: 54}
      ]
    })
  }

  getPersonList(){
    const personList = this.state.personList.map(person => 
      <Person
        key={person.id}
        id={person.id}
        name={person.name}
        age={person.age}
        click={this.switchNameHandler.bind(this, "POGO")}
        changed={this.nameChangeHandler}
      />
    );
    return personList;
  }
}

export default App;
