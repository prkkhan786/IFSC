import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {


  constructor() {
    super();
   
  }

  render() {
    return (
      <div>
        <Hello/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
