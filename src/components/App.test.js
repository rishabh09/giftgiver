import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

const app = shallow(<App/>)

it('renders correctly', () => {
    expect(app).toMatchSnapshot()
})

it('initialize the `state` with empty list of gifts', ()=> {
    expect(app.state().gifts).toEqual([])
})