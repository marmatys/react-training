import React from 'react';
import TodosList from './todosList';
import TodosNew from './todosNew';

class Todos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: props.todos
        }
    }

    onNewTodo = (todo) => {
        this.setState({
            // todos: [...this.state.todos, _.extend(todo, {key: _.uniq()})]
            todos: [...this.state.todos, todo]
        });
    };

    render() {
        return (
            <div>
                <h1>Your todos from today</h1>
                <div data-todos-count>You have {this.state.todos.length} todos</div>
                <TodosList todos={this.state.todos}/>
                <TodosNew onNewTodo={this.onNewTodo}/>
            </div>
        );
    }
}

Todos.defaultProps = {todos: []};

export default Todos;