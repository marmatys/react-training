import React from 'react';
import Todos from './todo';
import {mount} from 'enzyme';

describe('Todo List', () => {

    it('renders header', () => {
        const wrapper = mount(<Todos />);

        expect(wrapper.find('h1').text()).toEqual('Your todos from today');
    });
});