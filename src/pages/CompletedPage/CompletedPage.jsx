import React from 'react';
import { Link } from 'react-router-dom';
import { RiDeleteBinLine } from "react-icons/ri";

const CompletedPage = ({ Items, updateItem, deleteItem }) => {

  // Function to mark a item as incomplete
  const markAsIncomplete = (itemId) => {
    const updatedItems = Items.map((item) =>
      item.id === itemId ? { ...item, completed: false } : item
    );
    updateItem(updatedItems);
  };

  return (
    <div className='mid-section'>
      <div className='mid-heading'>
        <div className='header-link'>
          <Link className='link' to="/incomplete">Go to Incomplete Task</Link>
        </div>
        <h2>Completed Task</h2>
      </div>
      <ul className='list'>
        {Items.map((item) => (
          item.completed ? (
            <li className='list-item' key={item.id}>
              <div class="checkbox-wrapper-1">
                <input type="checkbox" className='substituted' checked={item.completed} id={item.id} onChange={() => markAsIncomplete(item.id)}/>
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

export default CompletedPage;
