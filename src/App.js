import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IncompletePage from './pages/IncompletePage/IncompletePage';
import CompletedPage from './pages/CompletedPage/CompletedPage';
import Header from './components/Header/Header';
import useLocalStorage from './hook/useLocalStorage';



function App() {

  const [Items, setIems] = useLocalStorage('react-todo.tasks',[]);

  const addItem = (item) => {
    setIems(prevState => [...prevState, item]);
    // console.log(item);
  };

  const updateItem = (items) => {
    setIems(items);
  }

  const deleteItem = (id) =>{
    setIems(prevState => prevState.filter(Item => Item.id !== id));
  }

  return (
    <Router>
      <div className='container'>
        <Header addItem={addItem} />
        <Routes>
          <Route path="/" element={<IncompletePage Items={Items} updateItem={updateItem} deleteItem={deleteItem} />} />
          <Route path="/incomplete" element={<IncompletePage Items={Items} updateItem={updateItem} deleteItem={deleteItem} />} />
          <Route path="/completed" element={<CompletedPage Items={Items} updateItem={updateItem} deleteItem={deleteItem} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
