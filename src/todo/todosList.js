import React from 'react';

function TodosList(props) {
    return (
        <div>
            <table data-todos-table>
                <tbody>
                {props.todos.map(renderTodo)}
                </tbody>
            </table>
        </div>
    );

    function renderTodo(todo) {
        return (<tr key={todo.id}>
            <td>{todo.title}</td>
        </tr>);
    }
}

TodosList.defaultProps = {todos: []};

export default TodosList;
