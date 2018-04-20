import React from 'react';

class TodosNew extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todo: props.todo
        };
    }

    onSubmit = (event) => {
        event.preventDefault();
        const {onNewTodo} = this.props;
        onNewTodo(this.state.todo);
        this.setState({
            todo: {
                title: ''
            }
        });
    };

    onChange = (event) => {
        // DON'T DO THAT IN THIS WAY
        // this.state.todo = {}
        // BUT call setState
        this.setState({
           todo: {
               ...this.state.todo,
               title: event.target.value
           }
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input value={this.state.todo.title} type='text' onChange={this.onChange}/>
                    <button type='submit'>Add</button>
                </form>
            </div>
        );
    }
}

TodosNew.defaultProps = {todo: {title: ''}};

export default TodosNew;
