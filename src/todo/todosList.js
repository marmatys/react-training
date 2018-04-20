import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';

function TodosList (props) {
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
            <td><Link to={'/todo/' + todo.id}>{todo.title}</Link></td>
            <td>{todo.completed ? 'Yes' : 'No'}</td>
            <td>
                <button onClick={() => goToDetails(todo.id)}>Some button</button>
            </td>
        </tr>);
    }

    function goToDetails(id) {
        props.history.push(`/todo/${id}`);
    }
}

TodosList.defaultProps = {todos: []};

export default withRouter(TodosList);
