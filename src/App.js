import './style/_app.scss'
import React, { useState } from 'react';
import Counter from './components/counter';

export default function App() {
	let [value, setValue] = useState('Текст в инпуте');
	
	return (
		<div className="layout">
			<div className="container pt-5">
				<div className="mb-5">
					<h1 className="text-center">React app</h1>
					<input type="text" value={value} onChange={event => setValue(event.target.value)} />
					<h2>{value}</h2>
					<Counter/>
				</div>
			</div>
		</div>
	);
}
