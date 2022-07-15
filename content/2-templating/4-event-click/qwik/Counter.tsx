import { component$, useStore } from '@builder.io/qwik';

export const Counter = component$(() => {
	const store = useStore({
		count: 10,
	});

	return (
		<>
			<p>Counter: {store.count}</p>
			<button onClick$={() => store.count++}>+1</button>
		</>
	);
});
