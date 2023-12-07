import './style/_app.scss'
import React, { useState } from 'react';

export default function App() {
	let [counter, setCounter] = useState(0);

	function increment() {
		setCounter(counter => counter +=1 );
	}

	function dicrement() {
		setCounter(counter => counter -= 1);
	}

	return (
		<div className="layout">
			<div className="container pt-5">
				<div className="mb-5">
					<h1 className="text-center">React app</h1>
					<button type="button" onClick={increment}>increment</button>
					<div>{counter}</div>
					<button type="button" onClick={dicrement}>dicrement</button>
				</div>
			</div>
		</div>
	);
}
