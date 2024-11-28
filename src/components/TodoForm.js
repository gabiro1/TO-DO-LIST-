import React, { useState } from "react";

const TodoForm = ({ onAdd }) =>{
const [inputValue, setInputValue]= useState('');
const handleSubmit = (e)=>
{
    e.preventDefault();
    if (inputValue.trim()){
        onAdd(inputValue);
        setInputValue('');
    }
};
return(
    <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder="Add New Todo"/>
        <button type="submit">Add</button>
    </form>
);
};
export default TodoForm