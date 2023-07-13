import React from 'react';
import '../App.css';

function FunCompo() {
    return (
        <div className="func inline">
          <h1>This is created using Functional Component</h1>
          <p className="external">This is done by External css</p>
          <p style={{color:"blue"}}>This is done by Internal css</p>
        </div>
    )
}

export default FunCompo;