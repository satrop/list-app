import Post from '../Post/Post';
import { useLoaderData } from 'react-router-dom';

import styles from './PostList.module.scss';

function PostList() {
	const post = useLoaderData();

	return (
		<>
			{post.length > 0 && (
				<ul className={styles.postList}>
					{post.map((item) => (
						<Post
							key={item.id}
							id={item.id}
							name={item.name}
							body={item.body}
						/>
					))}
				</ul>
			)}
			{post.length === 0 && (
				<div className={styles.noPosts}>Nothing doing!</div>
			)}
		</>
	);
}

export default PostList;
