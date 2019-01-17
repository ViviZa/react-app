import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Rating from "../Components/Rating";


configure({ adapter: new Adapter() });


test('Rating Component renders correctly', () => {

    //when
    const wrapper = shallow(
        <Rating onDropDownClick={() => console.log("")}/>
    );
    const ratingHeadline = wrapper.find('.filter-headline');
    const ratingStars = wrapper.find('.stars label');

    //then
    expect(ratingHeadline.text()).toContain('Rating');
    expect(ratingStars.children()).toHaveLength(10);
});

