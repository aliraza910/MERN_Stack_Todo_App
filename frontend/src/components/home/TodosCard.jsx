import React from 'react';
import TodoSingleCard from './TodoSingleCard';

const TodosCard = ({ todos }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {todos.map((item) => (
        <TodoSingleCard key={item._id} todo={item} />
      ))}
    </div>
  );
};

export default TodosCard;
