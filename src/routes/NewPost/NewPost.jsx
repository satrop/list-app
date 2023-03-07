import { Link, Form, redirect } from 'react-router-dom';

import Modal from '../../components/Modal/Modal';

import styles from './NewPost.module.scss';

function NewPost() {
	return (
		<Modal>
			<Form method="post" className={styles.form}>
				<p>
					<label htmlFor="body">Text</label>
					<textarea id="body" required rows={3} name="body" />
				</p>
				<p>
					<label htmlFor="name">Your name</label>
					<input type="text" id="name" required name="name" />
				</p>
				<p className={styles.actions}>
					<Link to="../" type="button" className="s">
						Cancel
					</Link>
					<button>Submit</button>
				</p>
			</Form>
		</Modal>
	);
}

export default NewPost;

export async function action({ request }) {
	const formData = await request.formData();
	const postData = Object.fromEntries(formData);
	await fetch('https://satrop.github.io/dummy-backend/posts', {
		method: 'POST',
		body: JSON.stringify(postData),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	return redirect('/list-app/');
}
