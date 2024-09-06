import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateTodo from './pages/CreateTodos';
import ShowTodo from './pages/ShowTodo';
import EditTodo from './pages/EditTodo';
import DeleteTodo from './pages/DeleteTodo';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/todos/create' element={<CreateTodo />} />
      <Route path='/todos/details/:id' element={<ShowTodo />} />
      <Route path='/todos/edit/:id' element={<EditTodo />} />
      <Route path='/todos/delete/:id' element={<DeleteTodo />} />
    </Routes>
  );
};

export default App;
