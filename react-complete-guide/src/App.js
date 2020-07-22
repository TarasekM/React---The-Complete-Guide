import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component{
  state = {
    personList: [
      {
        "id": "0000-0000-0000-0000",
        "name": "Mateusz",
        "age": 25
      },
      {
        "id": "0000-0000-0000-0001",
        "name": "Jan",
        "age": 27
      },
      {
        "id": "0000-0000-0000-0002",
        "name": "Tirion",
        "age": 54
      }
    ]
  }

  render(){
    return(
      <div className="App">
        <h1>First change on Page.</h1>
        <div>
          <p>Just a paragraph.</p>
          <p>And the second one.</p> 
        </div>
        <div>
          <button onClick={this.switchNameHandler}>Switch the Name</button>
          {this.getPersonList()}
        </div>
      </div>
    )
  }

  switchNameHandler = () =>{
    // console.log("was clicked");
    this.setState({personList: [
      {
        "id": "0000-0000-0000-0000",
        "name": "Davel",
        "age": 24
      }
    ]})
  };

  getPersonList(){
    const personList = this.state.personList.map(person => 
      <Person key={person.id} name={person.name} age={person.age} />
    );
    return personList;
  }
}

export default App;
