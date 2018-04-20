
import React from 'react';
import {mount} from 'enzyme';

import TodosList from './todosList';
import {MemoryRouter} from 'react-router';

describe('TodosList component', () => {
    it('renders table', () => {
        const wrapper = mount(<MemoryRouter><TodosList/></MemoryRouter>);

        expect(wrapper.find('table')).toExist();
    });

    it('renders 3 rows for 3 todos', () => {

        const todos = [
            {id: 1, title: 'Buy milk', completed: false},
            {id: 2, title: 'Send PIT', completed: false},
            {id: 3, title: 'Send email', completed: false},
        ];

        const wrapper = mount(<MemoryRouter><TodosList todos={todos}/></MemoryRouter>);

        expect(wrapper.find('[data-todos-table] tbody tr')).toHaveLength(3);
    });
});