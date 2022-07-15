import { component$, useStore, useWatch$ } from '@builder.io/qwik';

export const DoubleCount = component$(() => {
	const store = useStore({
		count: 10,
		doubleCount: 20,
	});
	useWatch$((track) => {
		const count = track(store, 'count');
		store.doubleCount = 2 * count;
	});

	return <div>{store.doubleCount}</div>;
});
