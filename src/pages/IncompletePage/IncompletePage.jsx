import React from 'react';
import { Link } from 'react-router-dom';
import { RiDeleteBinLine } from "react-icons/ri";

const IncompletePage = ({ Items, updateItem, deleteItem }) => {
  
  const markAsCompleted = (itemId) => {
    const updatedItems = Items.map((item) =>
      item.id === itemId ? { ...item, completed: true } : item
    );
    console.log(updatedItems);
    updateItem(updatedItems);
  };

  return (
    <div className='mid-section'>
      <div className='mid-heading'>
        <h2>Incomplete Tasks</h2>
        <div className='header-link'>
            <Link className='link' to="/completed">Go to Completed Task</Link>
        </div>
      </div>
      <ul className='list'>
        {Items.map((item) => (
          !item.completed ? (
            <li className='list-item' key={item.id}>
              <div className="checkbox-wrapper-1">
                <input type="checkbox" className='substituted' checked={item.completed} id={item.id} onChange={() => markAsCompleted(item.id)} />
                <label htmlFor={item.id} className='item-txt'>{item.name}</label>
              </div>
              <button className='trash-icon' onClick={() => deleteItem(item.id)}>
                <RiDeleteBinLine />
              </button>
            </li>
          ) : null
        ))}
      </ul>
    </div>
  );
};

export default IncompletePage;
