import React from 'react';

function TodosList(props) {
    return (
        <div>
            <table data-todos-table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Is completed</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {props.todos.map(renderTodo)}
                </tbody>
            </table>
        </div>
    );

    function renderTodo(todo) {
        return (<tr key={todo.id}>
            <td>{todo.title}</td>
            <td>{todo.completed ? 'Yes' : 'No'}</td>
            <td>
                <button>Some button</button>
            </td>
        </tr>);
    }
}

TodosList.defaultProps = {todos: []};

export default TodosList;
