import './style/_app.scss'
import React, { useState } from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

export default function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'Пост про js', description: 'Описание поста' },
		{ id: 2, title: 'Пост про js 2', description: 'Описание поста 3' },
		{ id: 3, title: 'Пост про js 3', description: 'Описание поста 4' },
	])

	const [post, setPost] = useState({ title: '', description: '' });

	function addNewPost(event) {
		event.preventDefault();
		setPosts([...posts, {...post, id: Date.now()}]);
		setPost({ title: '', description: '' });
	}

	return (
		<div className="layout">
			<div className="container pt-5">
				<div className="mb-5">
					<h1 className="text-center">React app</h1>
					<form>
						<MyInput type="text" value={post.title} onChange={event => setPost({...post, title: event.target.value})}/>
						<MyInput type="text" value={post.description} onChange={event => setPost({...post, description: event.target.value})}/>
						<MyButton onClick={addNewPost} type="submit">Создать пост</MyButton>
					</form>
					<PostList title={'Список постов про JS'} posts={posts}/>
				</div>
			</div>
		</div>
	);
}
