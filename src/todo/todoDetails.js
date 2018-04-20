import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


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

    fetchData = (id) => {
        axios.get(`http://localhost:3001/todos/${id}`)
            .then(resp => resp.data)
            .then(data => this.setState({todo: {title: data.title, id: data.id}}))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <div>Id: {this.state.todo.id}</div>
                <div>Title: {this.state.todo.title}</div>
                <Link to="/">Back</Link>
            </div>
        );
    }
}

export default TodosDetails;
