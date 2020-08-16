
import React from "react";
import {ContainerInput} from './styles'
import { MdClose } from 'react-icons/md';

export default function Input({label, name, required}) {
 const [valueField, setValueField]=React.useState('');
 const inputEl = React.useRef(null);

  const clearValueField=()=>{
    setValueField('');
    inputEl.current.blur();
  }

  return (
      <ContainerInput>
        <input type="text" ref={inputEl} required={required} name={name} placeholder=" " 
        value={valueField} onChange={(e)=>setValueField(e.target.value)}/>
        <label htmlFor={name}>
            {label}
        </label>
        {valueField && <button onClick={clearValueField}>
          <MdClose size={15} />
        </button>}
      </ContainerInput>
  );
}
