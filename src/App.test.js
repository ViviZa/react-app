import React from 'react';
import App from './App';
import {configure, mount} from "enzyme/build";
import Adapter from "enzyme-adapter-react-16/build";

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    //when
    const wrapper = mount(<App />);
    const headerHeadline = wrapper.find('.stage h1');
    const filterSection = wrapper.find('.filter-section');
    const movieSection = wrapper.find('.teaser column');

    //then
    expect(headerHeadline.text()).toBe("Upcoming movie releases");
    expect(filterSection.children()).toHaveLength(3);
    expect(movieSection).toBeDefined();
    wrapper.unmount();
});
