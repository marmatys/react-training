import React from 'react';
import TodosList from "./todosList";

function Todos(props) {
    return (
        <div>
            <h1>Your todos from today</h1>
            <div data-todos-count>You have {props.todos.length} todos</div>
            <TodosList todos={props.todos}/>
        </div>
    );

}

Todos.defaultProps = {todos: []};

export default Todos;