// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import InputText from './Component/inputTx'
import Item from './Component/item';


const Todolist = () => {
  // 입력 값을 상태로 관리
  const [inputList, SetInputList] = useState([]);

  
  const handleClick = (text) => {
    SetInputList([...inputList, text]); // 입력 값 배열에 추가
  };

  return(
    <div className='div'>
      <div className='items'>
        <h1>To Do List</h1>
          {inputList.map((item)=>(
         <Item item = {item}  />
        ))}
      </div>
      <InputText save={handleClick} />

    </div>
  );
}

export default Todolist;
