import React from 'react'
import { shallow } from 'enzyme'

import Gift from './Gift'

describe('Gift', ()=>{
    const gift = shallow(<Gift/>)
    it('initalze with empty state', () => {
        expect(gift.state()).toEqual({ person: '', gift: ''})
    })
})