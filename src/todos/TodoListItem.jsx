import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ todo, onRemove }) => {
  return (
    <div className="columns">
      <div className="column is-6 is-offset-3">
        <p className="is-size-3">{todo.text}</p>
        <div className="">
          <button className="button is-small is-success is-rounded">
            Mark as Completed
          </button>
          <button
            className="button is-small is-danger is-rounded"
            onClick={() => onRemove(todo.text)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoListItem;
