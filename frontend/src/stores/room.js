import { writable } from 'svelte/store';

export const room = writable({ name: "", rounds: 1 });