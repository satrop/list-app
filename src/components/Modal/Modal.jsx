import { useNavigate } from 'react-router-dom';

import styles from './Modal.module.scss';

function Modal({ children }) {
	const navigate = useNavigate();

	function closeHandler() {
		navigate('../');
	}

	return (
		<>
			<div className={styles.backdrop} onClick={closeHandler} />
			<dialog open className={styles.modal}>
				{children}
			</dialog>
		</>
	);
}

export default Modal;
