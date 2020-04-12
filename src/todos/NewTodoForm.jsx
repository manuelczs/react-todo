import React, { useState } from 'react';
import { connect } from 'react-redux';
import './NewTodoForm.css';
import { createTodo } from './actions';

const NewTodoForm = ({ todos, onCreatePress }) => {
  const [inputValue, setInputValue] = useState('');
  const [errorFlag, setErrorFlag] = useState(false);

  return (
    <div>
      <div className="field columns">
        <div className="control column is-6 is-offset-2">
          <input
            className="input is-small is-primary is-rounded"
            type="text"
            placeholder="type a new value"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></input>
        </div>
        <div className="column is-1">
          <button
            className="button is-small is-dark is-rounded"
            onClick={() => {
              setErrorFlag(false);
              if (inputValue !== '') {
                onCreatePress(inputValue);
                setInputValue('');
              } else {
                setErrorFlag(true);
              }
            }}
          >
            Create Todo
          </button>
        </div>
      </div>
      {errorFlag && (
        <div className="columns">
          <div className="notification is-danger column is-7 is-offset-2">
            <p>Please type something!</p>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

const mapDispatchToProps = (dispatch) => ({
  onCreatePress: (text) => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
