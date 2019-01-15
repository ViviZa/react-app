import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import FilterSection from "../Components/FilterSection";

configure({adapter: new Adapter()});

test('FilterSection Component renders correctly', () => {

    //given
    const actorJson = [
        "Viola Davis",
        "Hans Dieter Wolff"
    ];
    const genreJson = [
        "Horror",
        "Romantic"
    ];

    //when
    const wrapper = shallow(
        <FilterSection renderApp={() => console.log("")} genres={genreJson} actors={actorJson} />
    );
    const filterSection = wrapper.find('.filter-section');
    const actorDropDown = wrapper.find('DropDown').get(0);
    const genreDropDown = wrapper.find('DropDown').get(1);

    //then
    expect(filterSection).toBeDefined();
    expect(actorDropDown.props.content).toContain("Viola Davis");
    expect(genreDropDown.props.content).toContain("Romantic");
});

