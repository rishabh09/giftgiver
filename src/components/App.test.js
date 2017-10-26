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
	})
})