import React, { Component } from 'react';
import { queue } from './queue';

class Test extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			count2: 0,
		};
		this.onClick = this.onClick.bind(this);
		this.increase = this.increase.bind(this);
		this.increase2 = this.increase2.bind(this);
		this.funcQueue = queue(this.increase, 500);
		this.funcQueue2 = queue(this.increase2, 1000);
	}

	increase(val) {
		this.setState((state) => ({
			count2: state.count2 + val,
		}));
	}

	increase2(val) {
		this.setState((state) => ({
			count: state.count + val,
		}));
	}

	onClick() {
		for (let i = 0; i < 10; i++) {
			this.funcQueue(1);
			this.funcQueue2(2);
		}
	}

	render() {
		const {count, count2} = this.state;
		return (
		  <div>
			  <button onClick={this.onClick}>
				  Click me
			  </button>
			  <div>
				  {count}, {count2}
			  </div>
		  </div>
		);
	}
}

export default Test;