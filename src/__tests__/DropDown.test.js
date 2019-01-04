import React from 'react';
import { mount } from 'enzyme';
import DropDown from "../Components/DropDown";
import actorJson from "../dummy-json-responses/Actors";

test('TodoComponent renders the text inside it', () => {
    const wrapper = mount(
        <DropDown title="Actor" type="actor" content={actorJson} onDropDownClick={this.onDropDownClick}/>
    );
    const p = wrapper.find('.toggle-todo');
    expect(p.text()).toBe('Buy Milk');
});