import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import FilterSection from "../Components/FilterSection";

configure({adapter: new Adapter()});

test('FilterSection Component renders correctly', () => {
    //when
    const wrapper = shallow(
        <FilterSection renderApp={() => console.log("")} genres={""} actors={""} />
    );
    const filterSection = wrapper.find('.filter-section');
    const actorDropDown = wrapper.find('DropDown').get(0);
    const genreDropDown = wrapper.find('DropDown').get(1);
    const ratingFilter = wrapper.find('Rating');

    //then
    expect(filterSection).toBeDefined();
    expect(actorDropDown).toBeDefined();
    expect(actorDropDown.props.title).toBe("Actor");
    expect(genreDropDown).toBeDefined();
    expect(genreDropDown.props.title).toBe("Genre");
    expect(ratingFilter).toBeDefined();
});

test('FilterSection renders DropDown correctly', () => {

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
    const actorDropDown = wrapper.find('DropDown').get(0);
    const genreDropDown = wrapper.find('DropDown').get(1);

    //then
    expect(actorDropDown).toBeDefined();
    expect(actorDropDown.props.content).toContain("Viola Davis");
    expect(genreDropDown).toBeDefined();
    expect(genreDropDown.props.content).toContain("Romantic");
});