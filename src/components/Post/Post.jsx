import { Link } from 'react-router-dom';

import styles from './Post.module.scss';

function Post({ id, name, body }) {
	return (
		<li className={styles.post}>
			<Link to={id}>
				<p className={styles.author}>{name}</p>
				<p className={styles.text}>{body}</p>
			</Link>
		</li>
	);
}

export default Post;