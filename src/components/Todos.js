import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../services/actions/todosAction';

const Todos = () => {
  const { todos, loading, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div>
      <h2>Todos fetch axios app</h2>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error.message}</h2>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.id}. {todo.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todos;
