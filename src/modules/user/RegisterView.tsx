/** @format */

import React, { PureComponent } from 'react';

export class RegisterView extends PureComponent {
	state = {
		email: '',
		password: '',
	};

	handleChange = (e: any) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};

	render() {
		return <form>Register View</form>;
	}
}
