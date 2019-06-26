import React from 'react'

import '../styles/modal.scss'

export default class Modal extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			active: false
		}
		this.closeModal = this.closeModal.bind(this)
	}

	componentDidMount() {
		console.log(this.props);
		if (window.location.search === '?thank_you') {
			this.setState({active: true})
		}
	}

	render() {
		var modalClasses = this.state.active ? 'modal-content animate' : 'modal-content'
		return (
			<div id="modal"
				className={this.state.active ? 'modal-open' : ''}
				onClick={this.closeModal} >

				<div className={modalClasses}>
					<div class="modal-header">
						<span class="close" onClick={this.closeModal}>&times;</span>
						<h2 id="modalHeader">Thank You</h2>
					</div>
					<div class="modal-body">
						<p>We will respond to you shortly.</p>
					</div>
					<div class="modal-footer">
						<h3 onClick={this.closeModal} className="theme-button">Return to Homepage</h3>
					</div>
				</div>

			</div>
		)
	}

	closeModal() {
		this.setState({active:false})
	}
}
