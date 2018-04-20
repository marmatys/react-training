import React from 'react';
import Todos from './todos';
import {mount} from 'enzyme';
import moxios from 'moxios';

describe('Todos Component', () => {

    it('renders header', () => {
        const wrapper = mount(<Todos/>);

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

    describe('server test', function () {

        beforeEach(() => {
            moxios.install();
        });

        afterEach(() => {
            moxios.uninstall();
        });

        it('renders todos count from server', (done) => {
            const wrapper = mount(
                <Todos todos={[]}/>
            );

            moxios.wait(async () => {
                let request = moxios.requests.mostRecent();
                request.respondWith({
                    status: 200,
                    response: [
                        {id: 1, title: 'Buy milk', completed: false},
                        {id: 2, title: 'Send PIT', completed: false},
                        {id: 3, title: 'Send email', completed: false},
                        {id: 4, title: 'Send JPK file', completed: false}
                    ]
                }).then(() => {
                    expect(wrapper.find('[data-todos-count]').text()).toEqual('You have 4 todos');
                    done();
                });
            });
        });

        it('submits new todo', (done) => {
            const wrapper = mount(<Todos todos={[]}/>);

            wrapper.instance().onNewTodo({title: 'Write a book'});

            moxios.wait(async () => {
                let request = moxios.requests.mostRecent();
                request.respondWith({
                    state: 200
                }).then(() => {
                    expect(JSON.parse(request.config.data)).toEqual(
                        jasmine.objectContaining({title: 'Write a book'})
                    );
                    done();
                });
            });
        });
    });

});

