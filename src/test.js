import React, { Component } from 'react';
import { queue } from './queue';

class Test extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 1,
		};
		this.onClick = this.onClick.bind(this);
		this.increase = this.increase.bind(this);
		this.funcQueue = queue(this.increase, 1000);
	}

	increase(val) {
		this.setState((state) => ({
			count: state.count + val,
		}));
	}

	onClick() {
		for (let i = 0; i < 10; i++) {
			this.funcQueue(2);
		}
	}

	render() {
		const {count} = this.state;
		return (
		  <div>
			  <button onClick={this.onClick}>
				  Click me {count}
			  </button>
		  </div>
		);
	}
}

export default Test;