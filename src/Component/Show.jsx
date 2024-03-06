// import React, { useState } from "react"
// import styles from './Todolist.module.css';
// import Todolist from "./Todolist";

// function Show(){
//     const [show, toggleShow] = useState([false]);
//     let [showState, setShowState] = useState(true);

//     return(
//         <div>
//             <div>
//                 {show && <input type='text'></input>}
//                 {show && <button>저장</button>}
//             </div>
                    
//             <div>
//                 <button className={styles.btn}
//                     onClick={() => {
//                         toggleShow(!show);
//                         // edit(index);
//                         setShowState(!showState);
//                         console.log("요놈보소", setShowState)
//                     }}
//                 >
//                     {show ? "돌아가기" : "수정"}
//                 </button>
//             </div>
//         </div>
//     )
// };

// export default Show;