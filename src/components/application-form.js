import React from 'react'

// using uncontrolled components: https://reactjs.org/docs/uncontrolled-components.html
// formik form library: https://jaredpalmer.com/formik/docs/overview

export default class AppForm extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			value: '',
			customValue: 'This is a custom value',
			selectValue: 'mango'
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event) {
		this.setState({value: event.target.value})
	}

	handleSubmit(event) {
		alert('the form has been submitted')
		event.preventDefault()
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Name:
					<input type="text" value={this.state.value} onChange={this.handleChange} />
				</label>
				<label>
	            Pick your favorite flavor:
		          <select value={this.state.selectValue} onChange={this.handleChange}>
		            <option value="grapefruit">Grapefruit</option>
		            <option value="lime">Lime</option>
		            <option value="coconut">Coconut</option>
		            <option value="mango">Mango</option>
		          </select>
		        </label>
				<textarea value={this.state.customValue} />
				<input type="submit" value="Submit" />
			</form>
		)
	}
}
