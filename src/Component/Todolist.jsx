import React, { useState } from 'react';
import styles from './Todolist.module.css';


const Todolist = () => {
    const [text, setText] = useState('')
    const [todo, setTodo] = useState([])

    const add = () => {
        setText('');
        let copyTodo = [...todo]
        copyTodo.push(text)
        setTodo(copyTodo)
        console.log("추가", todo)
    }
    const del = (index) => {
        let copyTodo = [...todo]
        copyTodo.splice(index,1)
        setTodo(copyTodo)
    }
    
    return (
        <div className={styles.div}>
            <h1>To Do List</h1>

            <div>
                {
                    todo.map((item, index) => (
                    <div className={styles.valueBox} key={index}>
                        {item}
                        <button className={styles.btn} onClick={() => {del(index)
                        console.log("버튼", index)
                        }}>삭제</button>
                    </div>
                    ))
                }

                <br />
                <div className={styles.inputBox}>
                    <input
                    className={styles.input}
                    type="text" 
                    value={text}
                    onChange={(e) => {setText(e.target.value)}}
                    placeholder='내용을 입력하시오'
                    />
                    <button className={styles.btn} onClick={() => add()}>추가</button>
                </div>
            </div>

        </div>
    )
};

export default Todolist

// export default function todolist() {
//     <p>이렇게 작성해도 됨</p>
// }