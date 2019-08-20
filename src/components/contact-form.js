import React from 'react'

// using uncontrolled components: https://reactjs.org/docs/uncontrolled-components.html
// formik form library: https://jaredpalmer.com/formik/docs/overview
// Formik sandbox: https://codesandbox.io/s/zKrK5YLDZ

import contactStyles from './contact-form.module.scss'

export default class ContactForm extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			value: ''
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
			<form id={contactStyles.form} name="contact-form" action="/?thank_you" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
				<h2>Contact Form:</h2>
				<input type="hidden" name="bot-field" />
				<input type="hidden" name="form-name" value="contact-form" />
				<label>
					Name:
					<input type="text" name="name" />
				</label>
				<label>
					Email:
					<input
						type="email"
						name="email"
						placeholder="email@example.com"
						required
						/>
				</label>
				<label>
					Phone:
					<input
						type="tel"
						name="phone"
						placeholder="9055127474"
						required
						/>
				</label>
				<label>
					Question/Comment:
					<textarea name="comment" placeholder="Please write your question or comment..." />
				</label>
				<input type="submit" value="Submit" className="theme-button" />
			</form>
		)
	}

}
