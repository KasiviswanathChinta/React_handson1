import React, { Component } from 'react';
import '../App.css';

export class ClassCompo extends Component {
  render() {
    return(
        <div className="class inline">
        <h1>This is created using Class Component</h1>
        <p className="external">This is done by External css</p>
        <p style={{color:"blue"}}>This is done by Internal css</p>
        </div>
    );
  }
}

export default ClassCompo