import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null,
}

function TodoForm(props) {
    const {onSubmit} = props;
    const [value, setValue] = useState('');

    function handleChange(e) {
        console.log(e.target.value);
        setValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!onSubmit) return;

        const formValues = {
            title:value,
        };
        onSubmit(formValues);

        setValue('');
    }

    return (
        <div className="Holder">
        <form onSubmit={handleSubmit}>
           <input type="text" placeholder='Enter a new task' className='todo-input' value={value} onChange={handleChange} /> 
        </form>
        </div>
    );
}

export default TodoForm;