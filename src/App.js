import './style/_app.scss'
import React, { useState } from 'react';
import PostList from './components/PostList';

export default function App() {
	const [posts] = useState([
		{ id: 1, title: 'Пост про js', description: 'Описание поста' },
		{ id: 2, title: 'Пост про js 2', description: 'Описание поста 3' },
		{ id: 3, title: 'Пост про js 3', description: 'Описание поста 4' },
	])

	return (
		<div className="layout">
			<div className="container pt-5">
				<div className="mb-5">
					<h1 className="text-center">React app</h1>
					<PostList title={'Список постов про JS'} posts={posts}/>
				</div>
			</div>
		</div>
	);
}
