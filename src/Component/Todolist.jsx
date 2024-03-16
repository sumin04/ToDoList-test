import React, { useState } from 'react';
import styles from './Todolist.module.css';


const Todolist = () => {
    const [text, setText] = useState('');
    const [textTrans, setTextTrans] = useState('');
    const [todo, setTodo] = useState([]);
    const [todoIndex, setTodoIndex] = useState(null); // 선택한 인덱스를 저장할 상태

    const add = () => {
        setText(''); // 비동기
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

    // 수정 모드로 변경하고 해당 항목을 수정할 수 있도록 하는 함수
    const edit = (index) => {
        let copyTodo = [...todo];
        setTodoIndex(index); // 수정 모드 활성화
        setTextTrans(todo[index]); // 수정할 값 설정
        console.log(copyTodo[index]);
    }

    // 수정된 값을 저장하고 수정 모드를 비활성화하는 함수
    const save = () => {
        let copyTodo = [...todo];
        copyTodo[todoIndex] = textTrans; // 수정된 값 저장
        setTodo(copyTodo);
        setTodoIndex(null); // 수정 모드 비활성화
    }

    return (
        <div className={styles.div}>
            <h1>To Do List</h1>
            <div>{
                    todo.map((item, index) => (
                    <div className={styles.valueBox} key={index}>
                        <p>{item}</p>
                        {/* {조건(<태그>) : (</태그>)} */}
                        {todoIndex === index ? (
                            <input 
                            type='text'
                            onChange={(e) => setTextTrans(e.target.value)}
                            value={textTrans}
                            maxLength={10}
                            autoFocus
                            />
                        ) : (
                            <></>
                        )}
                        <div>
                            {todoIndex === index && (
                                <button className={styles.btn} onClick={() => save()}>저장</button>
                            )}
                        </div>
                        <div>
                            {/* /수정 버튼을 클릭하면 해당 항목이 수정 모드로 전환되고,
                                다시 한 번 더 클릭하면 수정 모드가 해제됩니다. */}
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