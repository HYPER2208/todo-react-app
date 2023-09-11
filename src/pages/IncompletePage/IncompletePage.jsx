import React from 'react';

const IncompletePage = ({ Items, updateItem }) => {
  
  const markAsCompleted = (itemId) => {
    const updatedItems = Items.map((item) =>
      item.id === itemId ? { ...item, completed: true } : item
    );
    console.log(updatedItems);
    updateItem(updatedItems);
  };

  return (
    <div className='mid-section'>
      <h2>Incomplete Tasks</h2>
      <ul className='list'>
        {Items.map((item) => (
          !item.completed ? (
            <li key={item.id}>
              <input type="checkbox" checked={item.completed} id={item.id} onChange={() => markAsCompleted(item.id)} />
              <label htmlFor={item.id} className='item-txt'>{item.name}</label>
            </li>
          ) : null
        ))}
      </ul>
    </div>
  );
};

export default IncompletePage;
