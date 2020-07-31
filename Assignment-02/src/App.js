import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';


class App extends Component {

  state = {
    length: 0,
    text: ''
  }

  changeListener = (event) =>{
    const newText = event.target.value;
    const newLength = newText.length;
    this.setState({
      length: newLength,
      text: newText
    });
  }

  getChars = () => {
    let text = this.state.text.split('');

    const chars = text.map((character, index) => {
      return <Char char={character} key={index} delete={this.deleteCharListener.bind(this, index)} />
    });
    return chars;
  }

  deleteCharListener = (index) => {
    let text = this.state.text.split('');
    text.splice(index, 1);
    
    const newText = text.join('');
    const newLength = newText.length;

    this.setState({
        length: newLength,
        text: newText
      });
  }

  render() {
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        
        <div>
          <input type='text' onChange={(event) => this.changeListener(event)} value={this.state.text} />
          <p>String length is {this.state.length}.</p>
          <Validation length={this.state.length}/>
          {this.getChars()}
        </div>
      </div>
    );
  }
}

export default App;
