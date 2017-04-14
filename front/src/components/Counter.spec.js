// Must have at least one test file in this directory or Mocha will throw an error.
import React from 'react';
import {shallow} from 'enzyme';
import Counter from './Counter';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme()); // Note the invocation at the end

describe('<Counter />', () => {
  it('should count', () => {

    const wrapper = shallow(<Counter />);
    const actual = wrapper.find(".counter");

    expect(actual).to.have.length(1);
  });
});
