// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import InputValue from './Component/inputValue'
import Item from './Component/item';


const App = () => {
  const [addvalue, setAddValue] = useState(0);
  const add = () => {
    setAddValue(addvalue+1)
    console.log(addvalue)
  }


  return (
    <div>
      <p>0</p>
      <div>
        <button  onClick={add}>+</button>
        <button>-</button>
      </div>
    </div>
  )
}

export default App;
