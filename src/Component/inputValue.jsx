import { useState } from "react";
import '../App.css'

function InputValue({save}) {
    const [text , setText] = useState('')

    const submit =(e)=>{
      e.preventDefault();
      save(text);
      setText('');
    }

    return (
        <>
          <form onSubmit={submit} >
            <input 
              className='inputValue'
              type='text' 
              value={text}
              onChange={(evnet)=>{setText(evnet.target.value)}}
              placeholder='내용을 입력하시오' 
              />
            <button className='submit' type='submit'>추가</button>
          </form>
        </>
    )
}
export default InputValue;