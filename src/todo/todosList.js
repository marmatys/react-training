import React from 'react';

function TodosList(props) {
    return (
        <div>
            <table data-todos-table>
                <tbody>
                {props.todos.map((todo) => renderTodo(todo))}
                </tbody>
            </table>
        </div>
    );

    function renderTodo(todo) {
        return (<tr>
            <td>{todo.title}</td>
        </tr>);
    }
}

TodosList.defaultProps = {todos: []};

export default TodosList;