import './style/_app.scss'
import React, { useState } from 'react';
import PostItem from './components/PostItem';

export default function App() {
	const [posts] = useState([
		{ id: 1, title: 'Заголовок поста', description: 'Описание поста' },
		{ id: 2, title: 'Заголовок поста 2', description: 'Описание поста 3' },
		{ id: 3, title: 'Заголовок поста 3', description: 'Описание поста 4' },
	])
	
	return (
		<div className="layout">
			<div className="container pt-5">
				<div className="mb-5">
					<h1 className="text-center">React app</h1>
					{posts.map(post => {
						return <PostItem post={post} key={post.id}/>
					})}
				</div>
			</div>
		</div>
	);
}
