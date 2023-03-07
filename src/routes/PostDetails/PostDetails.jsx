import { useLoaderData, Link } from 'react-router-dom';

import Modal from '../../components/Modal/Modal';
import styles from './PostDetails.module.scss';

function PostDetails() {
	const post = useLoaderData();

	if (!post) {
		return (
			<Modal>
				<main className={styles.details}>
					<h1>Could not find post</h1>
					<p>Unfortunately, the requested post could not be found.</p>
					<p>
						<Link to="../" className={styles.btn}>
							Okay
						</Link>
					</p>
				</main>
			</Modal>
		);
	}
	return (
		<Modal>
			<main className={styles.details}>
				<p className={styles.name}>{post.name}</p>
				<p className={styles.text}>{post.body}</p>
			</main>
		</Modal>
	);
}

export default PostDetails;

export async function loader({ params }) {
	const response = await fetch(
		'https://satrop.github.io/dummy-backend/posts/' + params.id
	);
	const resData = await response.json();
	return resData.post;
}

//https://satrop.github.io/dummy-backend/
