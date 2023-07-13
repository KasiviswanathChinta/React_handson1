import React,{useState} from 'react';
import '../App.css';
import FunCompo from './FunCompo';
import ClassCompo from './ClassCompo';

function MainCompo() {
  
    const [FunState, setFunState] = useState(false);
    const [ClassState, setClassState] = useState(false);
    console.log(FunState);
    console.log(ClassState);
    
   return (
     <div>
        <h1 className="box">Styling using Functional and Class Component</h1>
        <button onClick={()=>setFunState(!FunState)}>To see the styling of functional Componenet</button>
        <button onClick={()=>setClassState(!ClassState)}>To see the styling of class Componenet</button>
        {FunState && <FunCompo />}
        {ClassState &&<ClassCompo />}
     </div>
   )
}

export default MainCompo;