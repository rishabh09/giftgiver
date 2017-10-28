import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App', () => {
	const app = shallow(<App/>)

	it('initialize the `state` with empty list of gifts', ()=> {
			expect(app.state().gifts).toEqual([])
	})

	describe('when clicking the `add gift` button', () => {
		beforeEach(()=> {
			app.find('.btn-add').simulate('click')
		})
		it('add new gift to `state`', ()=> {
			expect(app.state().gifts).toEqual([{id: 1}])
		})

		it('add new gift to `state`', ()=> {
			expect(app.state().gifts).toEqual([{id: 1},{id: 2}])
		})

		it('renders new gifts on `gift-lift`', () => {
			expect(app.find('.gift-list').children().length).toEqual(3)
		})

		it('create a gift component', () => {
			expect(app.find('Gift').exists()).toBe(true)
		})
	})

	describe('when user removes the gift', ()=> {
		beforeEach(() => {
			app.instance().removeGift(1)
		})
		it('removes gift from `state`', () => {	
			expect(app.state().gifts).toEqual([{id: 2},{id: 3},{id: 4}])
		})
	})


})