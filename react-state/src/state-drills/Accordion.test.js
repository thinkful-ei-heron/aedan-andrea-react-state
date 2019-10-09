import React from 'react';
import Accordion from './Accordion';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import Store from '../Store';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

describe('Accordian Component', () => {
    it('renders empty li if no prop supplied', () => {
        const tree= renderer
            .create(<Accordion />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('component renders no sectios as active by default', () =>{
        const tree= renderer
        .create(<Accordion sections={Store.sections} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
    });
    it('component opens a clicked section', () => {
        const wrapper = shallow(<Accordion sections={Store.sections} />)
        wrapper.find('button').at(2).simulate('click')
        expect(toJSON(wrapper)).toMatchSnapshot()
    });
    it('only opens last section when multiple sectionc clicked', () => {
        const wrapper = shallow(<Accordion sections={Store.sections} />)
        wrapper.find('button').at(0).simulate('click')
        wrapper.find('button').at(2).simulate('click')
        expect(toJSON(wrapper)).toMatchSnapshot()
    });
})