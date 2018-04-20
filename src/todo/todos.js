import React from 'react';
import TodosList from './todosList';
import TodosNew from './todosNew';
import axios from 'axios';

class Todos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: props.todos
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        axios.get('http://localhost:3001/todos')
            .then(resp => resp.data)
            .then(data => this.setState({todos: data}))
            .catch(err => console.log(err));
    };

    onNewTodo = (todo) => {
        axios.post('http://localhost:3001/todos', todo)
            .then(this.fetchData);
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