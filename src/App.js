import React, { Component } from 'react';
import Form from './components/Form';
import Perustiedot from "./components/Perustiedot"



class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Form name={this.state.name}/>
      
       
      </div>
    );
  }
}
export default App;

