import React from 'react';
import CardTable from './index';
import {mount, shallow} from 'enzyme';

const cards = [
  {
    id: 1,
    flipped: false,
    pair: 'aa',
    image: 'photo.aa.png'
  },
  {
    id: 2,
    flipped: false,
    pair: 'bb',
    image: 'photo.bb.png'
  },
  {
    id: 3,
    flipped: false,
    pair: 'aa',
    image: 'photo.aa.png'
  },
  {
    id: 4,
    flipped: false,
    pair: 'bb',
    image: 'photo.bb.png'
	}
]

const cardsNoMatch = [
  {
    id: 1,
    flipped: false,
    pair: 'aa',
    image: 'photo.aa.png'
  },
  {
    id: 2,
    flipped: false,
    pair: 'bb',
    image: 'photo.bb.png'
  },
  {
    id: 3,
    flipped: false,
    pair: 'cc',
    image: 'photo.cc.png'
  },
  {
    id: 4,
    flipped: false,
    pair: 'dd',
    image: 'photo.dd.png'
	}
]

const cardsMatch = [
  {
    id: 1,
    flipped: false,
    pair: 'aa',
    image: 'photo.aa.png'
  },
  {
    id: 2,
    flipped: false,
    pair: 'aa',
    image: 'photo.aa.png'
  },
  {
    id: 3,
    flipped: false,
    pair: 'aa',
    image: 'photo.aa.png'
  },
  {
    id: 4,
    flipped: false,
    pair: 'aa',
    image: 'photo.aa.png'
	}
]

describe('Given we pass in valid props', () => {
	it('should render out a table of cards in one row', () => {
		const component = mount(
			<CardTable
				originalCards={cards}
				rows={4}/>
		);

		expect(component.find('.card').length).toEqual(4);
	})
})

describe('Given we pass in valid props', () => {
	it('should render out a table of cards with four rows', () => {
		const component = mount(
			<CardTable
				originalCards={cards}
				rows={1} />
		);

		expect(component.find('.column').length).toEqual(4);
	})
})

describe('Given we pass in valid props', () => {
	it('should call the internal method to shuffle the deck', () => {		
		const component = mount(
			<CardTable
				originalCards={cards}
				rows={6} />
		);

		expect(component.state('cards')).not.toEqual(cards)
	})
})

describe('Given we pass in valid props and click a card', () => {
	it('should call the internal method to select the card', () => {
		const component = mount(
			<CardTable
				originalCards={cards}
				rows={6} />
		);
		const componentSpy = jest.spyOn(component.instance(), 'selectCard');
		component.instance().forceUpdate();
		component.find('.card').at(1).simulate('click');

		expect(componentSpy.mock.calls.length).toEqual(1)
	})
})

describe('Given we pass in valid props and click two unmatching cards', () => {
	it('should set an error', () => {
		const component = mount(
			<CardTable
				originalCards={cardsNoMatch}
				rows={6} />
		);

		component.find('.card').at(1).simulate('click');
		component.find('.card').at(2).simulate('click');

		expect(component.state('message')).toEqual('No match - Try again!')
	})
})

describe('Given we pass in valid props and click two matching cards', () => {
	it('should set and save the matching cards in state', () => {
		const component = mount(
			<CardTable
				originalCards={cardsMatch}
				rows={6} />
		);
		const componentSpy = jest.spyOn(component.instance(), 'selectCard');
		component.instance().forceUpdate();
		component.find('.card').at(1).simulate('click');
		component.find('.card').at(2).simulate('click');

		expect(component.state('matches').length).toEqual(2)
	})
})

