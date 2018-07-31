import React from 'react';
import Card from './index';
import {mount} from 'enzyme';

const details = {
  flipped : false,
  id: 1,
  pair: 'aa',
  image: 'photo.zz.png'
}

const detailsFlippedTrue = {
  flipped : true,
  id: 1,
  pair: 'aa',
  image: 'photo.zz.png'
}

describe('Given we pass in valid props', () => {
	it('should render a game with cards', () => {
		const component = mount(
      <Card
        details={details} />
		);
		expect(component.find('Card').length).toEqual(1)
	})
})

describe('Given we pass in valid props and click it', () => {
	it('should call the onSelect method', () => {
    const mySpyFunction = jest.fn();
		const component = mount(
      <Card
        details={details}
        onSelect={mySpyFunction} />
		);

    component.simulate('click');
    
    expect(mySpyFunction.mock.calls.length).toEqual(1)
	})
})

describe('Given we pass in flipped === true', () => {
	it('should toggle a class named flippped', () => {
		const component = mount(
      <Card
        details={detailsFlippedTrue} />
		);

    expect(component.find('.flipped').length).toEqual(1)
	})
})