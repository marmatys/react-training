import React from 'react';
import {mount} from 'enzyme';

import TodosList from './todosList';
import withMemoryRouter from '../testUtils';

describe('TodosList component', () => {
    it('renders table', () => {
        const wrapper = mount(withMemoryRouter(<TodosList/>));

        expect(wrapper.find('table')).toExist();
    });

    it('renders 3 rows for 3 todos', () => {

        const todos = [
            {id: 1, title: 'Buy milk', completed: false},
            {id: 2, title: 'Send PIT', completed: false},
            {id: 3, title: 'Send email', completed: false},
        ];

        const wrapper = mount(withMemoryRouter(<TodosList todos={todos}/>));

        expect(wrapper.find('[data-todos-table] tbody tr')).toHaveLength(3);
    });
});