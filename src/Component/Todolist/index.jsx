import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todos: [],
    onTodoClick: null,
}


function TodoList(props) {
    const { todos, onTodoClick } = props;

    function handleClick(todo) {
        if (onTodoClick) {
            onTodoClick(todo);
        }
    }

    return (
        <ul className="Todo-List">
            {todos.map(todo => (
                <li key={todo.id} onClick={() => handleClick(todo)}>    
                {todo.title}  
                <span className='delete'>ⓧ</span> 
                </li>
            ))}
        </ul>
    );
}

export default TodoList;