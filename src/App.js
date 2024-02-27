// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
// import InputValue from './Component/inputValue'
// import Item from './Component/item';

const App = () => {
  const [text, setText] = useState('')
  const [todo, setTodo]  = useState([''])

  const add = () => {
    setText('')
    let copyTodo = [...todo]
    copyTodo.push(text)
    setTodo(copyTodo)
    console.log("추가", todo)
  }

  return (
    <div className='div'>
      <h1>To Do List</h1>
      <br /><br /><br /><br />

      <p>{todo}</p>

      <br />
      <input type='text' value={text} onChange={(e) => setText(e.target.value)}/>
      <button onClick={() => add()}>등록</button>
    </div>
  )

};

export default App;













// const App = () => {
//   const [text, setText] = useState('')
//   const [todo, setTodo] = useState([])

//   const add = () => {
//     setText('');
//     let copyTodo = [...todo]
//     copyTodo.push(text)
//     setTodo(copyTodo)
//     console.log("추가", todo)
//   }
//   const del = (index) => {
//     let copyTodo = [...todo]
//     copyTodo.splice(index,1)
//     setTodo(copyTodo)
//   }

//   return(
//     <div className='div'>
//       <h1>To Do List</h1>
//       <div>
//         {
//           todo.map((item, index) => (
//             <div key={index}>
//               {item}
//               <button onClick={() => {del(index)
//               console.log("버튼", index)
//               }}>삭제</button>
//             </div>
//           ))
//         }

//         <br />
//         <input
//           type="text" 
//           value={text}
//           onChange={(e) => {setText(e.target.value)}}
//           placeholder='내용을 입력하시오'
//         />
//         <button onClick={() => add()}>추가</button>
//       </div>

//     </div>
//   )
  
// }

// export default App;
