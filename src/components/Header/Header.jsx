import React, { useState } from 'react';

const Header = ({ addItem }) => {

    const [ InputItem, SetInputItem ] = useState("");

    const itemEvent = (event) => {
        SetInputItem(event.target.value);
        // console.log(InputItem);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e);
        addItem({
            id: Date.now(),
            name: InputItem,
            completed: false,
        })
        SetInputItem("");
    };

    return (
        <header className='header'>
            
            <h1 className='logo-txt'>Todo App</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    id="item" 
                    value={InputItem} 
                    placeholder='Add a Item' 
                    onInput={itemEvent} 
                    required
                    autoFocus
                    className='input'
                    maxLength={30}
                />
                <button className='btn' type='submit'>Add Task</button>
            </form>
            
        </header>
    );
};

export default Header;
