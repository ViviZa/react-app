import React from 'react';
import {configure, mount} from 'enzyme';
import DropDown from "../Components/DropDown";
import actorJson from "../dummy-json-responses/Actors";
import Adapter from "enzyme-adapter-react-16";


configure({ adapter: new Adapter() });


test('TodoComponent renders the text inside it', () => {
    ///shallow um die Komponente ohne "Unterkomponenten" zu rendern
    const wrapper = mount(
        <DropDown title="Actor" type="actor" content={actorJson} onDropDownClick={() => console.log("")}/>
    );
    const p = wrapper.find('.toggle-todo');
    expect(p.text()).toBe('Buy Milk');
});