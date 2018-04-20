import React from 'react';
import Todos from './todos';
import {mount} from 'enzyme';

describe('Todo List', () => {

    it('renders header', () => {
        const wrapper = mount(<Todos />);

        expect(wrapper.find('h1').text()).toEqual('Your todos from today');
    });

    it('renders todos count for 1 todo', () => {
        const todos = [
            {id: 1, title: 'Buy milk', completed: false}
        ];

        const wrapper = mount(<Todos todos={todos}/>);

        expect(wrapper.find('[data-todos-count]').text()).toEqual('You have 1 todos')
    });

    it('renders todos count for 1 todo', () => {
        const todos = [
            {id: 1, title: 'Buy milk', completed: false},
            {id: 2, title: 'Send PIT', completed: false},
            {id: 3, title: 'Send email', completed: false},
        ];

        const wrapper = mount(<Todos todos={todos}/>);

        expect(wrapper.find('[data-todos-count]').text()).toEqual('You have 3 todos')
    });
});