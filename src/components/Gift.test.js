import React from 'react'
import { shallow } from 'enzyme'

import Gift from './Gift'

describe('Gift', ()=>{
  const gift = shallow(<Gift/>)
    it('initalze with empty state', () => {
      expect(gift.state()).toEqual({ person: '', gift: ''})
    })

    describe('when typing in the person input', () => {
      const person = "Test User"
      beforeEach(() => {
        gift.find('.input-person').simulate('change', {target: {value: person}})
      })

      it('adds the person in state', () => {
        expect(gift.state().person).toEqual(person)
      })      
    })

    describe('when typing in the gift input', () => {
      const present = "Test Gift"
      beforeEach(() => {
        gift.find('.input-gift').simulate('change', {target: { value : present}})
      })

      it('adds the gift in state', () => {
        expect(gift.state().gift).toEqual(present)
      })
    })
    
})