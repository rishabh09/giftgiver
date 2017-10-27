import React, { Component } from 'react'
import { Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap'

class Gift extends Component {
	constructor() {
		super()
		this.state = { person : '', gift: ''}
	}
	render() {
		return (
			<div>
				<Form>
					<FormGroup>
						<ControlLabel>Person</ControlLabel>
						<FormControl 
							className="input-person" 
							onChange={e => this.setState({person: e.target.value})}/>
					</FormGroup>
					<FormGroup>
						<ControlLabel>Gifts</ControlLabel>
						<FormControl 
							className="input-gift" 
							onChange={e => this.setState({gift: e.target.value})}/>
					</FormGroup>
				</Form>
			</div>
		)
	}
}

export default Gift