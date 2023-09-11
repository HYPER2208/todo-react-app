import React from 'react';

const CompletedPage = ({ Items, updateItem }) => {

  // Function to mark a item as incomplete
  const markAsIncomplete = (itemId) => {
    const updatedItems = Items.map((item) =>
      item.id === itemId ? { ...item, completed: false } : item
    );
    updateItem(updatedItems);
  };

  return (
    <div className='mid-section'>
      <h2>Completed Task</h2>
      <ul className='list'>
        {Items.map((item) => (
          item.completed ? (
            <li key={item.id}>
              <input type="checkbox" checked={item.completed} id={item.id} onChange={() => markAsIncomplete(item.id)}/>
              <label htmlFor={item.id} className='item-txt'>{item.name}</label>
            </li>
          ) : null
        ))}
      </ul>
    </div>
  );
};

export default CompletedPage;
