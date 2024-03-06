import React, { useState } from 'react';
import styles from './Todolist.module.css';


const Todolist = () => {
    const [text, setText] = useState('');
    const [todo, setTodo] = useState([]);
    const [todoIndex, setTodoIndex] = useState(null); // 선택한 인덱스를 저장할 상태

    const add = () => {
        setText('');
        let copyTodo = [...todo];
        copyTodo.push(text);
        setTodo(copyTodo);
        console.log("추가", todo);
    }

    const del = (index) => {
        let copyTodo = [...todo];
        copyTodo.splice(index,1);
        setTodo(copyTodo);
    }

    const edit = (index) => {
        let copyTodo = [...todo];
        setTodoIndex(index);
        setText(todo[index]);
        console.log(copyTodo[index]);
    }

    const save = () => {
        let copyTodo = [...todo];
        copyTodo[todoIndex] = text;
        setTodo(copyTodo);
        setTodoIndex(null);
    }

    return (
        <div className={styles.div}>
            <h1>To Do List</h1>
            <div>{
                    todo.map((item, index) => (
                    <div className={styles.valueBox} key={index}>
                        <p>{item}</p>
                        {todoIndex === index ? (
                            <input 
                            type='text'
                            onChange={(e) => setText(e.target.value)}
                            value={text}
                            maxLength={10}
                            autoFocus
                            />
                        ) : (
                            <></>
                        )}
                        <div>
                            {todoIndex === index && (
                                <button onClick={() => save()}>저장</button>
                            )}
                        </div>
                        <div>
                            <button className={styles.btn} onClick={() => {
                                todoIndex === index ? setTodoIndex(null) : edit(index);
                            }}>
                                {todoIndex === index ? "돌아가기" : "수정"}
                            </button>
                            <button className={styles.btn} onClick={() => del(index)}>삭제</button>
                        </div>
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
                    maxLength='10'
                    autoFocus
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