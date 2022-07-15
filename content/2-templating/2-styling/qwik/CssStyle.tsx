import { component$, useStyles$ } from '@builder.io/qwik';
import styles from './style.module.css';

export const CssStyle = component$(() => {
	useStyles$(styles);

	return (
		<>
			<h1 className="title">I am red</h1>
			<button style={{ 'font-size': '10rem' }}>I am a button</button>
		</>
	);
});
