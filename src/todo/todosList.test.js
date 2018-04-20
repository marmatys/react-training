
import React from 'react';
import {mount} from 'enzyme';

import TodosList from './todosList';

describe('TodosList component', () => {
    it('renders table', () => {
        const wrapper = mount(<TodosList/>);

        expect(wrapper.find('table')).toExist();
    });
});