import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';
import NewTodoForm from './NewTodoForm';
import { connect } from 'react-redux';
import { removeTodo } from './actions';

const TodoList = ({ todos = [], onRemovedPressed }) => (
  <div className="columns">
    <div className="container">
      <div className="section box">
        <h3 className="title">ADD A NEW TODO</h3>
        <div>
          <div className="box">
            <NewTodoForm />
          </div>
          <div className="box">
            {todos.map((todo) => (
              <TodoListItem todo={todo} onRemove={onRemovedPressed} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemovedPressed: (text) => dispatch(removeTodo(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
