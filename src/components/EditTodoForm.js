import React, { useState } from 'react';

export const EditTodoForm = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.task);
    const [error, setError] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value.trim()) {
            setError("Please enter a task.");
            return;
        }
        editTodo(value, task.id);
        setValue("");
        setError("");
    };

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            {error && <p className="error" style={{ color: 'white' }}>{error}</p>}

            <input
                type='text'
                className='todo-input'
                value={value}
                placeholder='Update Task'
                onChange={(e) => setValue(e.target.value)}
            />
            <button type='submit' className='todo-btn'>Update Task</button>
        </form>
    );
};
