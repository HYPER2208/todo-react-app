import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
            <div className='header-link'>
                <Link className='link' to="/incomplete">Incomplete</Link>
                <Link className='link' to="/completed">Completed</Link>
            </div>
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
                />
                <button className='btn' type='submit'>Add Task</button>
            </form>
            
        </header>
    );
};

export default Header;
