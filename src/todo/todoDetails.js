import React from 'react';
import axios from 'axios';


class TodosDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: {
                id: '',
                title: ''
            }
        }
    }

    componentDidMount() {
        this.fetchData(this.props.match.params.id);
    }

    fetchData(id) {
        axios.get(`http://localhost:3001/todos/${id}`)
            .then(resp => resp.data)
            .then(data => this.setState({todo: {title: data.title, id: data.id}}))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <div>{this.state.todo.id}</div>
                <div>{this.state.todo.title}</div>
            </div>
        );
    }
}

export default TodosDetails;
