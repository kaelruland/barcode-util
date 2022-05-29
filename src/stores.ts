import { writable } from 'svelte/store';
import { defaultOptions } from './options';

const dataStore = () => {
	const { subscribe, set, update } = writable({ headers: [], items: [] } as {
		headers: Array<string>;
		items: Array<Item>;
	});

	return {
		subscribe,
		set,
		update
		//room for more methods
	};
};

export const data = dataStore();
export const errors = writable([] as Array<object>);
export const options = writable(defaultOptions);
export const state = writable({ rawText: '', useHeaders: true, previewScale: 100 } as {
	rawText: string;
	useHeaders: boolean;
	previewScale: number;
});
