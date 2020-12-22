import React, {useState} from 'react';
import './InputWrapper.css'


export default function InputWrapper({setInputValue}) {
  const [inputValue, setValue] = useState('')

  return (
      <div className='input-wrapper'>
        <p><b>Число:</b></p>
        <input onInput={(e) => setValue(e.currentTarget.value)} className='input'/>
        <button onClick={() => setInputValue(inputValue)} className='btn'>Submit</button>
      </div>
  );
}