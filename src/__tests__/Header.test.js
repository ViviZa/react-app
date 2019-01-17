import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Header from "../Components/Header";

configure({ adapter: new Adapter() });

test('Header Component renders correctly', () => {

    //when
    const headerWrapper = mount(
        <Header/>
    );
    const header = headerWrapper.find('stage');
    const headline = headerWrapper.find('.stage h1');

    //then
    expect(header).toBeDefined();
    expect(headline.text()).toBe('Upcoming movie releases');
});

