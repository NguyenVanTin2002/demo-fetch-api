// components/Table.tsx
import React, { useEffect } from 'react';
import { useTodo } from '../store/use-to-do';

const Table: React.FC = () => {
  const {todos, fetchTodos, loading , error } = useTodo();

  useEffect(() => {
    fetchTodos();
  }, []);
  if (loading) return <h1>Loading</h1>;

  if (error) return <h1>Error</h1>;
  return (
    <table style={{border:'1px solid white'}}>
      <thead>
        <tr>
          <th>User ID</th>
          <th>ID</th>
          <th>Title</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.userId}</td>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>{todo.completed ? 'Yes' : 'No'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
