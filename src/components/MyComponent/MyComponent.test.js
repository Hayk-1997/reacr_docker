import React from 'react';
import MyComponent from './MyComponent';

it('test my-component', () => {
    const wrapper = shallow(<MyComponent />);
    const welcome = <div>Hello World</div>;
    expect(wrapper.contains(welcome)).toEqual(true);
});