// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';


const App = () => {
  // 입력 값을 상태로 관리
  const [inputValue, setInputValue] = useState('');
  // const [clickValue, setClickValue] = useState('');

  // 모든 입력 값을 저장할 배열
  const [inputValues, setInputValues] = useState([]);

  // 입력 값이 변경될 때마다 상태 업데이트
  const Change = (e) => {
    setInputValue(e.target.value);
  };
  
  // 버튼 클릭 시 값을 받아와서 출력(?)
  // const onClickHandler = () => setClickValue(inputValue);
  
  const handleClick = (e) => {
    e.preventDefault(); // 폼 제출 기본 동작 막기 (새로고침)
    // setClickValue(inputValue);

    setInputValues([...inputValues, inputValue]); // 입력 값 배열에 추가
    setInputValue(''); // 입력 필드 초기화
  };

  return(
    <>
      <img src = {'img/jjanggu.jpg'} className='icon' alt='jjanggu-icon' />

      <p>오늘 해야 할 일들 : 
        <br />{inputValues.join(', ')}
      </p>

      <hr />
      
      {/* <p>요깅 : {clickValue}</p> */}

      {/* <form> */}
      <form onSubmit={handleClick}>
        <input 
          className='inputText'
          type='text' 
          value={inputValue} 
          onChange={Change} 
          placeholder='내용을 입력하시오' 
          />
        <button className='submit' type='submit'>추가</button>
        {/* <button className='submit' type='submit' onClick={onClickHandler}>전송</button> */}
      </form>
    </>
  );
}

export default App;