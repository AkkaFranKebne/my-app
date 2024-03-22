import { writable, derived, readable } from 'svelte/store';

export const email = writable('');

export const time = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});

const start = new Date();

export const elapsed = derived(
	time,
	($time) => Math.round(($time - start) / 1000)
);


 function createMessage() {
	const { subscribe, set, update } = writable('');

	return {
		subscribe,
		update: (text: string) => update((n) => n + text),
		reset: () => set('')
	};
}
export const message = createMessage();
