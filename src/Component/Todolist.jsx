import React, { useState } from 'react';
import styles from './Todolist.module.css';


const Todolist = () => {
    const [text, setText] = useState('');
    const [todo, setTodo] = useState([]);
    
    // const [show, toggleShow] = useState(false);

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
    const edit = (index) => {
        let copyTodo = [...todo]

        // console.log('변경', todo);
        console.log(copyTodo[index])
    }

    // if(false) { //수정모드임 ㅅㄱ
    //     return (
    //         <div className={styles.edit}>
    //             <input 
    //             type="text"
    //             placeholder='수정할 값 입력'
    //             />
    //             <button>적용</button>
    //         </div>
    //     );
    // }

    const [show, toggleShow] = useState(false);

    return (
        <div className={styles.div}>
            <h1>To Do List</h1>
            <div>{
                    todo.map((item, index) => (
                    <div className={styles.valueBox} key={index}>
                        {/* 나중에 문자열로 잘라보기 */}
                        <div>
                            <p>{item}</p>
                            {show && <input type='text'></input>}
                            {show && <button>저장</button>}
                        </div>
                        
                        <div>
                            {/* <button className={styles.btn}
                                onClick={() => {edit(index)
                                console.log("수정", index)
                            }}>수정</button> */}

                            <button className={styles.btn}
                                onClick={() => toggleShow(!show)}
                            >
                                <p onClick={() => {edit(index)
                                    console.log("수정/저장", index)
                                }}>
                                    {show ? "돌아가기" : "수정"}
                                </p>
                                {/* {show ? "저장" : "수정"} */}
                            </button>

                            <button className={styles.btn} onClick={() => {del(index)
                            console.log("버튼", index)
                            }}>삭제</button>
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