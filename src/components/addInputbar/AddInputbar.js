import React, { useState } from 'react';
import { AddIcon } from '../icons/Icons';
const AddInputbar = ({ placeholder, btnClick }) => {
  const [inputValue, setInputValue] = useState("");

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  }
  const btnClickHandler = () => {
    btnClick(inputValue);
    setInputValue("");
  }

  return (
    <div className="add-input-div">
      <div className="input-wrapper">
        <input type="text" placeholder={placeholder} value={inputValue} onChange={inputChangeHandler} />
        <button onClick={btnClickHandler}><AddIcon size={25} /></button>
      </div>

    </div>
  );
};

export default AddInputbar;