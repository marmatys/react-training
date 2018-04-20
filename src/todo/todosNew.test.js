import React from 'react';

import {mount} from 'enzyme';

import TodosNew from './todosNew';

describe('TodosNew component', () => {

    let wrapper;
    const onNewTodo = jest.fn();


    beforeEach(() => {
        wrapper = mount(
            <TodosNew onNewTodo={onNewTodo}/>
        );
    });

    it('submit new todo', () => {
        wrapper.find('input').simulate('change', {target: {value: 'My new todo'}});

        wrapper.find('form').simulate('submit');

        expect(onNewTodo.mock.calls).toHaveLength(1);
    });
});
