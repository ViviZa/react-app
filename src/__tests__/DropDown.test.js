import React from 'react';
import {configure, shallow} from 'enzyme';
import DropDown from "../Components/DropDown";
import Adapter from "enzyme-adapter-react-16";


configure({ adapter: new Adapter() });


test('DropDown Component renders', () => {

    //given
    const actorJson = [
        "Viola Davis",
        "Hans Dieter Wolff",
        "Drew Wroblewski",
        "Alex Zelenka"
    ];

    //when
    const wrapper = shallow(
        <DropDown title="Actor" type="actor" content={actorJson} onDropDownClick={() => console.log("")}/>
    );
    const dropDownSelect = wrapper.find('.dropbtn');
    const firstElementOfDropDown = wrapper.find('.dropdown-content a').get(0).props.children;

    //then
    expect(dropDownSelect.text()).toContain('select');
    expect(firstElementOfDropDown).toContain('Viola Davis');
});

