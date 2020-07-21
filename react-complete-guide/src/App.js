import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>First change on Page.</h1>
        <div>
          <p>Just a paragraph.</p>
          <p>And the second one.</p> 
        </div>
        <Person name="Davel" age="25" />
        <Person name="King" age="30">(a true one)</Person>
      </div>
    )
  }
}

export default App;
