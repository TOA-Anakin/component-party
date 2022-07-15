import { component$, useClientEffect$, useStore } from '@builder.io/qwik';

export const Name = component$(() => {
	const store = useStore({ name: 'John' });
	useClientEffect$(() => {
		store.name = 'Jane';
	});

	return <h1>Hello {store.name}</h1>;
});
