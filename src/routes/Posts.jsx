import { Outlet } from 'react-router-dom';

import PostList from '../components/PostList/PostList';

function Posts() {
	return (
		<>
			<Outlet />
			<main>
				<PostList />
			</main>
		</>
	);
}

export default Posts;

export async function loader() {
	const response = await fetch(
		'https://satrop.github.io/dummy-backend/posts'
	);
	const resData = await response.json();
	return resData.posts;
}
